export type Characteristics = {
  name: string
  value: string
  important: boolean
}
export interface FullProductSlice {
  title: string
  id: string
  price: number
  discount: number
  isLimited: boolean
  img: string
  currency: string
  code: number
  rating: number
  photos: string[]
  inStock: boolean
  saller: string
  isFavoriteSelectNumber: number
  salesNumber: number
  description: string
  guarantee: string
  paymauntType: string
  isFavorite: boolean
  characteristics: Characteristics[]
}
export interface FullProductSliceState {
  data: FullProductSlice | null
  status: "loading" | "success" | "error"
}
