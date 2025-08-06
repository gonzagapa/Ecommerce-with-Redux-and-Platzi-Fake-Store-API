import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginArg, LoginResponse } from './types';
import { ecommerceApi } from '../../app/api/EcommerceApi';


export const EcommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({baseUrl:ecommerceApi.getUri()}),
  endpoints: (builder) => ({
    postLoginUser: builder.mutation<LoginResponse,LoginArg>({
      query: ({email,password})=>(
        {url:"/login",
        body:{
        email:email,
        password:password
      }
    })
    }),
  }),
})

export const {usePostLoginUserMutation} = EcommerceApi