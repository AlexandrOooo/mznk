export type ProductItemProps = {
  title: string
  id: string
  price: number
  discount: number
  isLimited: boolean
  img: string
}

export interface ProductSlice {
  items: ProductItemProps[]
  title: string
}

export interface ProductsSliceState {
  lists: ProductSlice[]
  status: "error" | "success" | "loading"
}
