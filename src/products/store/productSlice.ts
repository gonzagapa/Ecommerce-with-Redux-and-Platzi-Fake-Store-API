import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {FilterParameters, QueryParameters } from '../service/types';

const initialState:QueryParameters = {
    offset:"0",
    limit:"12",
    categorySlug:""
}

export const productSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    changeTitleFilter:(state,action:PayloadAction<Pick<QueryParameters,"title">>)=>{
        const {title} =action.payload
        state.title = title
    },
    changeCategoryFilter:(state,action:PayloadAction<string>)=>{
      state.categorySlug = action.payload; 
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

export const {changeTitleFilter,
  changePaginationParams, 
  removeSpecificFilter, 
  changeCategoryFilter
} = productSlice.actions
