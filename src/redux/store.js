import { combineReducers, configureStore } from '@reduxjs/toolkit';
import spaceSlice from './slices/spaceList';

const rootReducer = combineReducers({
   [spaceSlice.name]: spaceSlice.reducer
});

export const store = configureStore({
   reducer: rootReducer
});