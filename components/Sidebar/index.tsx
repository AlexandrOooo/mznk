import React from 'react'
import FavoriteHeart from '../icons/FavoriteHeart'
import SocialMenu from '../SocialMenu'
const data = [
  '  Ноутбуки и компьютеры',
  'Смартфоны, ТВ и электроника',
  'Товары для геймеров',
  'Бытовая техника',
  'Товары для дома',
  'Инструменты и автотовары',
  'Сантехника и ремонт',
  'Дача, сад и огород',
  'Спорт и увлечения',
  'Одежда, обувь и украшения',
  'Красота и здоровье',
  'Детские товары',
  'Зоотовары',
  'Офис, школа, книги',
  'Алкогольные напитки и продукты',
  'Нашим защитникам'
]

export const index: React.FC<{}> = () => {
  return (
    <aside className="w-80  shrink-0 py-6 border-r-2 border-r-slate-200 border-r-solid ">
      <ul>
        {data.map((item, index) => (
          <li className="flex items-center" key={index}>
            <FavoriteHeart type="small" />
            <p className="hover:text-red-600 hover:underline text-zinc-700 h-8 cursor-pointer flex items-center">
              {item}
            </p>
          </li>
        ))}
      </ul>
      <SocialMenu />
    </aside>
  )
}
export default index
