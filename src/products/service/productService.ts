import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ecommerceApi } from '../../app/api/EcommerceApi';
import type { PaginationAttributes, ProductResponse, QueryParameters } from './types';

// function toStringParams(params: QueryParameters): Record<string, string> {
//     const result: Record<string, string> = {};
//     for (const key in params) {
//         if (params[key] !== undefined && params[key] !== null) {
//             result[key] = String(params[key]);
//         }
//     }
//     return result;
// }

export const ProductEcommerceApi = createApi({
    reducerPath:"ProductEcommerceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:ecommerceApi.getUri(),
    }),
    endpoints: (builder) =>({
        getAllProducts:builder.query<ProductResponse[],PaginationAttributes>({
            query:({offset = '0',limit = '10'})=>(
                {
                    url:`/products?offset=${offset}&limit=${limit}`,
                    method:"GET"
                }
            )
        }),
        getProductsByParameters:builder.mutation<ProductResponse[],QueryParameters>({
            query:(queryParams:QueryParameters)=>({
                url:`/products?${new URLSearchParams({...queryParams}).toString()}`,
                method:'GET'
            })
        })
    })

})

export const {useGetAllProductsQuery,useGetProductsByParametersMutation} = ProductEcommerceApi