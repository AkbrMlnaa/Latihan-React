import { createSlice, configureStore} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addCart: (state, action) => {
            state.push(action.payload);
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

console.log(`oncreate store : ${JSON.stringify(store.getState())}`);
store.subscribe(() => {
    console.log(`onchange store : ${JSON.stringify(store.getState())}`)
})

store.dispatch(cartSlice.actions.addCart({ id: 1, qty: 2}));