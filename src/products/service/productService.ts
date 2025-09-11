import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ecommerceApi } from '../../app/api/EcommerceApi';
import type {Category, ProductResponse, QueryParameters } from './types';

export const ProductEcommerceApi = createApi({
    reducerPath:"ProductEcommerceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:ecommerceApi.getUri(),
    }),
    endpoints: (builder) =>({
        getAllProducts:builder.query<ProductResponse[],QueryParameters>({
            query:(queryParams:QueryParameters)=>(
                {
                    url:`/products?${new URLSearchParams({...queryParams}).toString() }`,
                    method:"GET"
                }
            ),
            
        }),
        getCategories:builder.query<Category[],void>({
            query:()=>({
                url:"/categories",
                method:"GET"
            }),
            transformResponse:(response:Category[],meta,arg) => {
                response.unshift({name:"All", slug:""})
                return response.slice(0,6)
            }
        })
    })

})

export const {useGetAllProductsQuery, useGetCategoriesQuery} = ProductEcommerceApi