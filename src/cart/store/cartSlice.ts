import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CartProduct {
    id:   number;
    title:string;
    price:number;
    imageURL: string;
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

type ActionChangeAmount = {
    id:number,
    amount:number
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart:(state, action:PayloadAction<CartProduct>)=>{
        //check if the product exists in cartProducts
        if(!state.cartProducts.find((product) => product.id === action.payload.id)){
            state.cartProducts.push(action.payload)
            state.totalProducts +=1; //todo:refactor to add more products
        }
    },
    removeItemFromCart:(state, action:PayloadAction<Pick<CartProduct, "id">>) =>{
        const {id} = action.payload
        state.totalProducts -= 1;
        state.cartProducts = state.cartProducts.filter(product => product.id !== id)
    },
    resetCart:(state) =>{
        state.cartProducts = [];
        state.totalProducts = 0;
    },
    modifiedItemAmount:(state,action:PayloadAction<ActionChangeAmount>)=>{
        const {totalProducts,cartProducts} = state;
        state.totalProducts = totalProducts + action.payload.amount;

        const modifiedArray = cartProducts.map((item) =>{
            if(item.id === action.payload.id){
                const newAmount = item.amount + action.payload.amount;
                return {
                    ...item,
                    amount:newAmount
                }
            }
            return item
        })

        state.cartProducts = modifiedArray;
    }
  }
});

export const {addItemToCart,removeItemFromCart,resetCart} = cartSlice.actions
