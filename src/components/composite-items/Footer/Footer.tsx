import React from "react"
import styles from './Footer.module.css'
import logo from '../../../assets/logo.png'


interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
   id?: any
}

const Footer: React.FC<FooterProps> = ( props ) => {
   
   return (
      <div
         className={ styles.container }
         { ...props }
      >

         {/* LEFT SECTION */}
         <div className={ styles.leftSection }>
            <img src={ logo } alt={ 'Guardrail' } />
            <span className={ styles.caption }>Guardrail Technologies Inc, ©2023</span>
         </div>

         {/* RIGHT SECTION */}
         <div className={ styles.rightSection }>
            <span className={ styles.link }>Terms of Use</span>
            <span className={ styles.link }>Privacy Policy</span>
            <span className={ styles.link }>Contact Us</span>
         </div>
      </div>
   )

}

export default Footer