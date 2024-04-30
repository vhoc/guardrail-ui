import React from "react"
import styles from './FavoritesCounter.module.css'

interface FavoritesCounterProps extends React.HTMLAttributes<HTMLDivElement> {
   count?: number | undefined
   newFavorite?: boolean | undefined
}

const FavoritesCounter: React.FC<FavoritesCounterProps> = ( { count = 0, newFavorite = false, ...props } ): JSX.Element => {

   return (
      <div
         key={ count }
         className={ styles.container }
         style={{ backgroundColor: newFavorite ? '#0065FF' : '#56607C' }}
         { ...props }
      >
         { String( count ) }
      </div>
   )

}

export default FavoritesCounter