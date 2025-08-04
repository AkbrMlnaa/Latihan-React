// Reducer

import { createStore } from "redux";

const cardReducer = (state = { cart: []}, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
};

// Store
const store = createStore(cardReducer);
console.log(`oncreate store : ${store.getState()}`);
//subscribe

// Dispatch
const store1 = {type: "ADD_CART", payload: { id :1, qty: 2}}
store.dispatch(store1);


export default cardReducer;
