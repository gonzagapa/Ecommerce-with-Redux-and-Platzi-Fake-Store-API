import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ecommerceApi } from '../../app/api/EcommerceApi';
import type {ProductResponse, QueryParameters } from './types';

export const ProductEcommerceApi = createApi({
    reducerPath:"ProductEcommerceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:ecommerceApi.getUri(),
    }),
    endpoints: (builder) =>({
        getAllProducts:builder.query<ProductResponse[],QueryParameters>({
            query:(queryParams:QueryParameters)=>(
                {
                    url:`/products?${new URLSearchParams({...queryParams}).toString()}`,
                    method:"GET"
                }
            )
        }),
    })

})

export const {useGetAllProductsQuery} = ProductEcommerceApi