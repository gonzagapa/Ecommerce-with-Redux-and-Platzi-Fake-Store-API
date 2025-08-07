import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginArg, LoginResponse } from './types';
import { ecommerceApi } from '../../app/api/EcommerceApi';


export const EcommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({baseUrl:ecommerceApi.getUri()}),

  endpoints: (builder) => ({

    loginUser: builder.mutation<LoginResponse,LoginArg>({
      query: ({email,password})=>(
        {
        url:"/auth/login",
        body:{
        email:email,
        password:password
      },
      method:"POST"
    })
    }),
  }),
})

export const {useLoginUserMutation} = EcommerceApi