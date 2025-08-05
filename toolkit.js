import { configureStore, createAction, createReducer }  from '@reduxjs/toolkit';


const addCart = createAction('ADD_CART')

const cardReducer = createReducer([{id: 2, qty: 3}], (builder) => {
    builder.addCase(addCart, (state, action) => {
        state.push(action.payload)
    })
})

const login = createAction('LOGIN')

const loginReducer = createReducer({ isLogin: false}, (builder) => {
    builder.addCase(login, (state) => {
        state.isLogin = true
    })
})


const store = configureStore({
    reducer: {
        cart: cardReducer,
        login: loginReducer
    }
})


//subscribe
console.log(`oncreate store : ${JSON.stringify(store.getState())}`);
store.subscribe(() => {
    console.log(`onchange store : ${JSON.stringify(store.getState())}`)
})


store.dispatch(addCart({ id: 1, qty: 2}))
store.dispatch(login())