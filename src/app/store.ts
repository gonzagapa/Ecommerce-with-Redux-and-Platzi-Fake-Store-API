import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/store/authSlice'
import { EcommerceApi } from '../auth/services/authService'
// ...

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer, 

    [EcommerceApi.reducerPath]: EcommerceApi.reducer
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(EcommerceApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch