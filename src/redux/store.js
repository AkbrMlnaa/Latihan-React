import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

console.log(`Store : ${JSON.stringify(store.getState())}`);
store.subscribe(() => {
    console.log(`Store updated: ${JSON.stringify(store.getState())}`);
});

export default store;