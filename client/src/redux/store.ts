import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Persistor } from 'redux-persist/es/types';
import { createWrapper } from 'next-redux-wrapper';
import themeSlice from '@/redux/features/themeSlice';
import { postsApi } from '@/redux/services/postsApi';

const isDev = process.env.NODE_ENV !== 'production';

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

const makeConfiguredStore = (reducer: typeof rootReducer) =>
  configureStore({
    reducer,
    devTools: isDev,
    middleware: (gDM) =>
      gDM({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }).concat(postsApi.middleware),
  });

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  }

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // @ts-expect-error
  const store = makeConfiguredStore(persistedReducer);
  // @ts-expect-error
  store.__persistor = persistStore(store); // Nasty hack
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type PersistedStore = AppStore & {
  __persistor: Persistor;
};

export const wrapper = createWrapper<AppStore>(makeStore, { debug: isDev });
