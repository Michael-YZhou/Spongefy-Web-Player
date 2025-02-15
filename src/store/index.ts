import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
  },
});

// Define the type of the state of the store
const state = store.getState();
export type RootStateType = typeof state;

// Define the type of the dispatch function
export type AppDispatchType = typeof store.dispatch;

export default store;
