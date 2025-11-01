import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: ''
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: () => initialState,
    openModal: (state, action) => {
      state.open = true;
      state.title = action.payload.title;
    }
  }
})

export const {closeModal, openModal} = modalSlice.actions;

const modalSelector = (state: {modal: typeof initialState}) => state.modal;

export {modalSlice, modalSelector};
