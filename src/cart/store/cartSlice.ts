import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CartProduct {
    id:   number;
    title:string;
    slug: string;
    price:number;
    image: string;
    amount:number
}

interface CartState {
    totalProducts:number,
    cartProducts:CartProduct[]
}


const initialState:CartState = {
    totalProducts:0,
    cartProducts:[]
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart:(state, action:PayloadAction<CartProduct>)=>{
        state.cartProducts.push(action.payload)
        state.totalProducts =+1; //todo:refactor to add more products
    },
    removeItemFromCart:(state, action:PayloadAction<Pick<CartProduct, "id">>) =>{
        const {id} = action.payload
        state.totalProducts = -1;
        state.cartProducts = state.cartProducts.filter(product => product.id !== id)
    },
    resetCart:(state) =>{
        state.cartProducts = [];
        state.totalProducts = 0;
    }
  }
});

export const {addItemToCart,removeItemFromCart,resetCart} = cartSlice.actions
