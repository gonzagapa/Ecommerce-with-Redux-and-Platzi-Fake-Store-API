import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface AuthState {
    email:string,
    name:string,
    avatar:string,
    access_token: string,
    refresh_token: string,
}

const initialState:AuthState = {
    access_token:'',
    refresh_token:'',
    email:'',
    name:'',
    avatar:''
}
type AuthToken = Pick<AuthState,"access_token"|"refresh_token">;


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<AuthState>)=>{
        const {email,name,avatar} = action.payload;
        state.email = email;
        state.name = name;
        state.avatar = avatar;
    },
    setTokens: (state,action:PayloadAction<AuthToken>)=>{
      const {access_token, refresh_token} = action.payload;
        state.access_token = access_token;
        state.refresh_token = refresh_token;
    },
    logOut: (state)=>{
        state.email = '';
        state.name = '';
        state.avatar = '';
        state.access_token = '';
        state.refresh_token = '';
    }
  }
});
export const selectAuth = (state: RootState) => state.auth

export const {setTokens, logOut, setProfileInfo} = authSlice.actions
