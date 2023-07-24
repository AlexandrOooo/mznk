export type ProductItem = {
  title: string
  id: string
  price: number
  discount: number
  isLimited: boolean
  img: string
  currency: string
  isFavorite: boolean
}

export interface ProductSlice {
  items: ProductItem[]
  title: string
}

export interface ProductsSliceState {
  lists: ProductSlice[]
  status: "error" | "success" | "loading"
}
