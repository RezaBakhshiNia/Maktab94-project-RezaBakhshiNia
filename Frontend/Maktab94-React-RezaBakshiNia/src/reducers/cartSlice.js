import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },
    removeFromCart: (state) => {
      state.pop();
      console.log(state);
    },
    clearCart: (state) => {
      state.splice(0);
      console.log(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartCount = (state) => state.cart.length;

export default cartSlice.reducer;
