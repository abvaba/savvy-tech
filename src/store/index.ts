import { configureStore } from '@reduxjs/toolkit';
import {formSlice} from "./slices/form-slice";
import {modalSlice} from "./slices/modal-slice";
import { itemsApi } from './items-api';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    form: formSlice.reducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
    devTools: import.meta.env.DEV
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
