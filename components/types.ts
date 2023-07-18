import { CommentSlice } from "@/store/slices/comments/types"
import { ProductItem, ProductSlice } from "@/store/slices/products/types"
export type ProductProps = { infoProduct: ProductItem }
export type CommentProps = { infoComment: CommentSlice }
export type ProductListProps = { listProducts: ProductSlice }
