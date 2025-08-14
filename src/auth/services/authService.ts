import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginArg, LoginResponse, UserProfileArg, UserProfileResponse } from './types';
import { ecommerceApi } from '../../app/api/EcommerceApi';
import type { RootState } from '../../app';


export const EcommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({
    baseUrl:ecommerceApi.getUri(), 

    prepareHeaders(headers, {getState}) {
    const token = (getState() as RootState).auth.access_token;

    //if we have the access_token, inject it in every header
    if(token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers;
  },
  timeout:10000
}),

  endpoints: (builder) => ({

    loginUser: builder.mutation<LoginResponse,LoginArg>({
      query: ({email,password})=>(
        {
        url:"/auth/login",
        body:{
        email:email,
        password:password
      },
      method:"POST",
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    })
    }),
    userProfileInfo: builder.query<UserProfileResponse,UserProfileArg>({
      query: ()=>(
        {
          url:"/auth/profile",
          method:"GET",
        }
      ),
      
    })
  }),
})

export const {useLoginUserMutation, useUserProfileInfoQuery} = EcommerceApi