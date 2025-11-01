import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  id: '',
  title: '',
  subTitle: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    resetFormData: () => initialState,
    setFormData: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
    }
  }
})

export const {resetFormData, setFormData} = formSlice.actions;

const formSelector = state => state.form;

export {formSlice, formSelector};
