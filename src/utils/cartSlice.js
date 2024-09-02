import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
