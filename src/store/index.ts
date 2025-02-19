import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import recommendReducer from '../views/Discover/child-views/Recommend/store/recommend';

const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
    recommend: recommendReducer,
  },
});

// Define the type of the state of the store
const state = store.getState();
export type RootStateType = typeof state;

// Define the type of the dispatch function
export type AppDispatchType = typeof store.dispatch;

export default store;
