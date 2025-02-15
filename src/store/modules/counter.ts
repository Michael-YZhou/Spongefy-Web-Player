import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  count: number;
  message: string;
  direction?: 'up' | 'down';
}

const initialState = {
  count: 100,
  message: 'Hello Redux',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMassageAction: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { changeMassageAction } = counterSlice.actions;
export default counterSlice.reducer;
