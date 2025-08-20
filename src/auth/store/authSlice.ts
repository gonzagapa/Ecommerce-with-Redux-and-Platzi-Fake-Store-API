import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface AuthState {
    email:string,
    name:string,
    avatar:string,
    access_token: string,
    refresh_token: string,
    role:string,
}

const initialState:AuthState = {
    access_token:'',
    refresh_token:'',
    email:'',
    name:'',
    avatar:'',
    role:"customer"
}
type AuthToken = Pick<AuthState,"access_token"|"refresh_token">;
type AuthProfile = Pick<AuthState,"name"| "avatar"|"email"|"role">


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<AuthProfile>)=>{
        const {email,name,avatar, role} = action.payload;
        state.email = email;
        state.name = name;
        state.avatar = avatar;
        state.role = role
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
        state.role = 'customer'
    }
  }
});
export const selectAuth = (state: RootState) => state.auth

export const {setTokens, logOut, setProfileInfo} = authSlice.actions
