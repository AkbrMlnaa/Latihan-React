// Reducer

import { legacy_createStore } from "redux";

const cardReducer = (state = { cart: [ {id: 2, qty: 5}]}, action) => {
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
const store = legacy_createStore(cardReducer);
console.log(`oncreate store : ${store.getState()}`);

//subscribe
store.subscribe(() => {
    console.log(`onchange store : ${JSON.stringify(store.getState())}`)
})

// Dispatch
const store1 = {type: "ADD_CART", payload: { id :1, qty: 2}}
store.dispatch(store1);


export default cardReducer;
