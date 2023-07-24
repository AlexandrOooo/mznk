import { FullProductSlice } from "@/store/slices/fullProduct/types"
export type FavoritesSliceState = {
  items: FullProductSlice[]
  status: "loading" | "success" | "error"
}
