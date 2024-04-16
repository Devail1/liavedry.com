import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { getInitialTheme } from "@/utils";

type Theme = "light" | "dark";

const initialState: { value: Theme } = {
  value: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice;
