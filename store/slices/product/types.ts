export type ProductItemProps = {
  title: string
  slug: string
  price: number
  discount: number
  isLimited: boolean
  img: string
}

export interface ProductSliceState {
  items: ProductItemProps[]
  title: string
}

export interface ProductsSliceState {
  lists: ProductSliceState[]
}
