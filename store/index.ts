import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import productsSlice from "./slices/products/slice"
import commentsSlice from "./slices/comments/slice"
import fullProductSlice from "./slices/fullProduct/slice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    comments: commentsSlice,
    fullProduct: fullProductSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
