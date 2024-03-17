import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "@/redux/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  devTools: true,
});

// Infer the type of the store state
export type RootState = ReturnType<typeof store.getState>;
// Infer the type of dispatch method
export type AppDispatch = typeof store.dispatch;
