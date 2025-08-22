import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../../app';
import { ecommerceApi } from '../../app/api/EcommerceApi';
import type { PaginationAttributes, ProductResponse } from './types';


export const ProductEcommerceApi = createApi({
    reducerPath:"ProductEcommerceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:ecommerceApi.getUri(),

        // prepareHeaders(headers, {getState}) {
        //     const token = (getState() as RootState).auth.access_token;
        //     //if we have the access_token, inject it in every header
        //     if(token) {
        //         headers.set('authorization', `Bearer ${token}`)
        //     }
        //     return headers;
        // },
        // timeout:10000
    }),
    endpoints: (builder) =>({
        getAllProducts:builder.query<ProductResponse[],PaginationAttributes>({
            query:({offset = 0,limit = 10})=>(
                {
                    url:`/products?offset=${offset}&limit=${limit}`,
                    method:"GET"
                }
            )
        })
    })

})

export const {useGetAllProductsQuery} = ProductEcommerceApi