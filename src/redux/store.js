import { configureStore } from '@reduxjs/toolkit';
import { itemsApi } from './itemsSlice/itemsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    items: itemsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    itemsApi.middleware,
  ],
});
