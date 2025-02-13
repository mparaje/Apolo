import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                ...action.payload,
                cartItemId: uuid.v4() // Añade un ID único para este item en el carrito
            };
            console.log("Adding item:", newItem)

            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
            console.log("Existing item index:", existingItemIndex)

            if (existingItemIndex >= 0) {
                // Si ya existe, incrementa la cantidad
                state.items[existingItemIndex].quantity += newItem.quantity;
                console.log("Updated quantities:", state.items)
            } else {
                // Si no existe, agrega el nuevo item
                state.items.push(newItem);
                console.log("New state items:", state.items)
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.cartItemId !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;