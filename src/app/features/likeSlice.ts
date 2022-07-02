import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { IHouse } from 'src/hooks/useHouses';

export interface LikeState {
  houses: Array<IHouse>;
}

const initialState: LikeState = {
  houses: [],
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const house = action.payload;
      const index = state.houses.findIndex((h) => h.id === house.id);
      if (index === -1) {
        state.houses.push(house);
      } else {
        state.houses.splice(index, 1);
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;

export const selectlike = (state: RootState) => state.like.houses;

export default likeSlice.reducer;
