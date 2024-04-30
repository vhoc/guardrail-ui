import React from "react"
import { HistoryMenuItemButtonType, SizeType } from "../../../types/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faSquareShareNodes, faStar, faTrash } from "@fortawesome/free-solid-svg-icons"
import styles from './HistoryMenuItemButton.module.css'

interface HistoryMenuItemButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
   actionType: HistoryMenuItemButtonType
   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
   disabled?: boolean | undefined
   size?: SizeType | undefined
   open?: boolean | undefined
}

const iconTable = {
   edit: faPen,
   share: faSquareShareNodes,
   star: faStar,
   trash: faTrash,
}

const HistoryMenuItemButton: React.FC<HistoryMenuItemButtonProps> = ( { ...props } ): JSX.Element => {
   
   return (
      <button
         className={ `${ styles.button } ${ props.size === "sm" ? styles.sizeSmall : props.size === "lg" ? styles.sizeLarge : '' } ${ !props.open ? styles.collapsed : '' }` }
         onClick={ props.onClick }
         disabled={ props.disabled }
         { ...props  }
      >
      {
         props.open ?
            <FontAwesomeIcon icon={ iconTable[props.actionType] } />
         :
            null
      }
         
      </button>
   )

}

export default HistoryMenuItemButton