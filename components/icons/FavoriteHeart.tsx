"use client"

import React, { useState, useEffect } from "react"
import styles from "./styles.module.scss"

const FavoriteHeart: React.FC<{
  type: string
  additionalClassName?: string
  favorite?: boolean
  onChangeFavorite?: () => void
}> = ({ type, additionalClassName = "", favorite, onChangeFavorite }) => {
  const [classNameFavorite, setClassNameFavorite] = useState("")
  const [classNameFavoriteContainer, setClassNameFavoriteContainer] =
    useState("")

  useEffect(() => {
    const createClassNameFavorite = () => {
      let result = ""
      if (favorite) {
        result = `${styles["favoriteHeart"]} ${styles["isFavorite"]}`
      } else {
        result = styles["favoriteHeart"]
      }
      return result
    }
    setClassNameFavorite(() => createClassNameFavorite())
  }, [favorite])

  useEffect(() => {
    const createClassNameFavoriteContainer = () => {
      let result = additionalClassName
      if (type === "small") {
        result += " Favorite-small hover:bg-amber-100"
      } else if (type === "big") {
        result += " Favorite-big hover:bg-amber-100"
      }
      return result
    }

    setClassNameFavoriteContainer(() => createClassNameFavoriteContainer())
  }, [type, additionalClassName])

  return (
    <div className={classNameFavoriteContainer}>
      <svg
        className={classNameFavorite}
        onClick={onChangeFavorite}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface / Heart_01">
          <path
            id="Vector"
            d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  )
}
export default FavoriteHeart
