import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
  },
});

// Define the type of the state of the store
type GetStateFnType = typeof store.getState;
export type RootStateType = ReturnType<GetStateFnType>;

// Define the type of the dispatch function
export type AppDispatchType = typeof store.dispatch;

export default store;
