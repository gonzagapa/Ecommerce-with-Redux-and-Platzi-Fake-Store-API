import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { QueryParameters } from '../service/types';


interface ProductState {
  data:[],
  isLoading:boolean,
  isError:boolean
}

const initialState:QueryParameters = {
    offset:"0",
    limit:"12",
    category:undefined,
    title:undefined,
    //todo:add a data property
}

export const productSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    changeTitleFilter:(state,action:PayloadAction<Pick<QueryParameters,"title">>)=>{
        const {title} =action.payload
        state.title = title
    },
    changePaginationParams:(state, action:PayloadAction<Pick<QueryParameters,"offset"| "limit">>)=>{
      const {offset,limit} = action.payload; 
      state.limit = limit; 
      state.offset = offset; 
    }
  }
});

export const {changeTitleFilter,changePaginationParams} = productSlice.actions
