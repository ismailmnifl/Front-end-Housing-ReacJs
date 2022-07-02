import { configureStore } from '@reduxjs/toolkit';
import likeReducer from 'src/app/features/likeSlice';
import menuReducer from 'src/app/features/menuSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    like: likeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
