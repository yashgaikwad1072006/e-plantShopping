import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const incoming = action.payload;
      const existing = state.items.find((item) => item.name === incoming.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...incoming, quantity: 1 });
      }
    },

    removeItem(state, action) {
      const nameToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== nameToRemove);
    },

    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.name !== name);
      } else {
        const item = state.items.find((item) => item.name === name);
        if (item) {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

export default cartSlice.reducer;
