import { CommentSlice } from "@/store/slices/comments/types"
import { FullProductSlice } from "@/store/slices/fullProduct/types"
import { ProductItem, ProductSlice } from "@/store/slices/products/types"
export type ProductProps = { infoProduct: FullProductSlice }
export type CardProductProps = { infoProduct: ProductItem }
export type CommentProps = { infoComment: CommentSlice }
export type ProductListProps = { listProducts: ProductItem[] }
