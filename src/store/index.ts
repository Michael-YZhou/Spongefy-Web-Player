import { configureStore } from '@reduxjs/toolkit';
import recommendReducer from '../views/Temp-Discover/child-views/Recommend/store/recommend';
import playerReducer from '../views/Player/store/player';

const store = configureStore({
  reducer: {
    // Add your reducers here
    recommend: recommendReducer,
    player: playerReducer,
  },
});

// Define the type of the state of the store
const state = store.getState();
export type RootStateType = typeof state;

// Define the type of the dispatch function
export type AppDispatchType = typeof store.dispatch;

export default store;
