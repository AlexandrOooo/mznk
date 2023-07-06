import { createSlice, current } from '@reduxjs/toolkit'
import { ProductsSliceState } from './types'

const posts = [
  {
    title: 'My First Post',
    slug: 'my-first-post',
    price: 100,
    discount: 90,
    isLimited: false,
    img: '/product1.webp',
    currency: 'USD'
  },
  {
    title: 'My Second Post',
    slug: 'my-second-post',
    price: 100,
    discount: 10,
    isLimited: true,
    img: '/product2.webp',
    currency: 'USD'
  },
  {
    title: 'My Third Post',
    slug: 'my-third-post',
    price: 100,
    discount: 10,
    isLimited: false,
    img: '/product3.webp',
    currency: 'USD'
  },
  {
    title: 'My First Post',
    slug: 'my-first-post',
    price: 100,
    discount: 10,
    isLimited: true,
    img: '/product1.webp',
    currency: 'USD'
  },
  {
    title: 'My First Post ',
    slug: 'my-first-post',
    price: 100,
    discount: 0,
    isLimited: true,
    img: '/product1.webp',
    currency: 'USD'
  },
  {
    title: 'My First Post',
    slug: 'my-first-post',
    price: 34,
    discount: 13,
    isLimited: false,
    img: '/product1.webp',
    currency: 'USD'
  },
  {
    title: 'My First Post',
    slug: 'my-first-post',
    price: 100,
    discount: 10,
    isLimited: false,
    img: '/product1.webp',
    currency: 'USD'
  },
  {
    title: 'My First Post',
    slug: 'my-first-post',
    price: 100,
    discount: 10,
    isLimited: true,
    img: '/product1.webp',
    currency: 'USD'
  }
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // },
  // {
  //   title: 'My First Post',
  //   slug: 'my-first-post',
  //   price: 100,
  //   discount: 10,
  //   isLimited: true,
  //   img: '/product1.we,bp',
  // currency: 'USD'
  //
  // }
]

const initialState: ProductsSliceState = {
  lists: [
    {
      items: posts,
      title: 'Товари'
    },
    {
      items: posts,
      title: 'recommended'
    }
  ]
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
})
// export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions
export default productSlice.reducer
