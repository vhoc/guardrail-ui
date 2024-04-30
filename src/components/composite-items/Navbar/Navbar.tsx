import React from "react"
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import logo from '../../../assets/logo.png'
import cameron from '../../../assets/cameron.png'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
   id?: any
}

const Navbar: React.FC<NavbarProps> = ( props ) => {

   return (
      <div
         className={ styles.container }
         { ...props }
      >

         {/* LEFT SECTION */}
         <div className={ styles.leftSection }>
            <FontAwesomeIcon icon={ faSquare } color={ '#23293B' } size={ 'xl' } />
            <img src={ logo } alt={ 'Guardrail' } />
         </div>

         {/* RIGHT SECTION */}
         <div className={ styles.rightSection }>
            <span className={ styles.profileName }>James Cameron</span>
            <div className={ styles.profilePicContainer }>
               <img className={ styles.profilePic } src={ cameron } alt={ 'James Cameron' } />
               <FontAwesomeIcon icon={ faCaretDown } color={ '#E3C5FB' } /> 
            </div>
         </div>

      </div>
   )

}

export default Navbar