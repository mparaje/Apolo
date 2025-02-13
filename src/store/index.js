import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counterSlice'
import shopReducer from '../features/shopSlice'
import cartReducer from '../features/cartSlice'
import { shopApi } from "../services/shop"
import { ordersApi } from "../services/orders"
import { setupListeners } from "@reduxjs/toolkit/query"
//import { cartApi } from "../services/cart"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        //[cartApi.reducerPath]: cartApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            shopApi.middleware,
            ordersApi.middleware,
            //cartApi.middleware
        ),
})

setupListeners(store.dispatch)