import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [{ name: "punctual" }],
  },
  reducers: {
    addTocart: (state, action) => {
      //mutatinhg the state directly
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((ele, index) => {
        return index != action.payload;
      });
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addTocart, removeItem, clearCart } = cartSlice.actions;
