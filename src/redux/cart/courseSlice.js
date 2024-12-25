import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cartItems")) || [];

const saveToLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state));
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const exist = state.some((item) => item.id === product.id);
      if (!exist) {
        state.push(product);
        saveToLocalStorage(state); // حفظ إلى localStorage
      }
    },
    deleteItem: (state, action) => {
      const product = action.payload;
      const updatedState = state.filter((item) => item.id !== product.id);
      saveToLocalStorage(updatedState); // حفظ إلى localStorage
      return updatedState;
    },
    clearCart: () => {
      saveToLocalStorage([]); // حفظ عربة فارغة إلى localStorage
      return [];
    },
  },
});

export default courseSlice.reducer;
export const { addItem, deleteItem, clearCart } = courseSlice.actions;
