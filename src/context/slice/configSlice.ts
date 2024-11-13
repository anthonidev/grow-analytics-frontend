import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
  themeDark: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
  themeDark: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleTheme: (
      state,
      action: {
        payload: boolean;
      }
    ) => {
      state.themeDark = action.payload;
    },
  },
});

export const { toggleSidebar, toggleTheme } = configSlice.actions;

export default configSlice.reducer;
