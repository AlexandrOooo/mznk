import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productsSlice from './slices/product/slice'

export const store = configureStore({
  reducer: {
    products: productsSlice
  }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
