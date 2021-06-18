import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './header.module.css';


const Header = ({authService}) => {
    const history = useHistory();
    const logoutService = () => {
        authService.logout()
    }

    useEffect(()=>{
        authService.loginchange(user => {
          if(!user){
              history.push('/')
          }
        }
        )
    })

    return(
    <div className={styles.header}>
        {authService && <button onClick={logoutService} className={styles.logout}>Logout</button>}
        <img src="/images/logo.png" className={styles.logo}></img>
        <h1 className={styles.title}>Business Card Maker</h1>
    </div>
)
}

export default Header