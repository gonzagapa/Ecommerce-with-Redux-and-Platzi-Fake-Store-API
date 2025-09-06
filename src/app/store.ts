import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../auth/store/authSlice'
import { AuthEcommerceApi } from '../auth/services/authService'
import { ProductEcommerceApi } from '../products/service/productService'
import { productSlice } from '../products/store/productSlice'
// ...

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    product:productSlice.reducer,

    [AuthEcommerceApi.reducerPath]: AuthEcommerceApi.reducer,
    [ProductEcommerceApi.reducerPath]:ProductEcommerceApi.reducer
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(AuthEcommerceApi.middleware)
    .concat(ProductEcommerceApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch