import React from 'react'
import SearchIcon from '../icons/searchIcon'

export const index: React.FC<{}> = () => {
  return (
    <div className="flex items-center w-15 width-750">
      <div className="rounded-l grow relative bg-white ">
        <span className="left-2 absolute top-3">
          <SearchIcon />
        </span>
        <input
          placeholder="Я шукаю"
          type="text"
          className=" ml-8 outline-0 h-10"
        />
      </div>

      <button
        className="bg-green-700 text-white h-10 rounded-r p-4
      flex items-center justify-center">
        Знайти
      </button>
    </div>
  )
}
export default index
