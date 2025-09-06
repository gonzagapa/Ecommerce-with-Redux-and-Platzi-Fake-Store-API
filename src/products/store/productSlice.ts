import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {FilterParameters, QueryParameters } from '../service/types';

const initialState:QueryParameters = {
    offset:"0",
    limit:"12",
}

export const productSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    changeTitleFilter:(state,action:PayloadAction<Pick<QueryParameters,"title">>)=>{
        const {title} =action.payload
        state.title = title
    },
    removeSpecificFilter:(state,action:PayloadAction<keyof FilterParameters>)=>{
      delete state[action.payload];
    },
    changePaginationParams:(state, action:PayloadAction<Pick<QueryParameters,"offset"| "limit">>)=>{
      const {offset,limit} = action.payload; 
      state.limit = limit; 
      state.offset = offset; 
    },
  }
});

export const {changeTitleFilter,changePaginationParams, removeSpecificFilter} = productSlice.actions
