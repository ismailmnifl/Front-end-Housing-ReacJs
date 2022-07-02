import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

export interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.isOpen;

export default menuSlice.reducer;
