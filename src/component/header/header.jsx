import React from 'react';
import styles from './header.module.css';


const Header = ({onLogout}) => {
    const logoutService = () => {
        onLogout.logout()
    }
    return(
    <div className={styles.header}>
        {onLogout && <button onClick={logoutService} className={styles.logout}>Logout</button>}
        <img src="/images/logo.png" className={styles.logo}></img>
        <h1 className={styles.title}>Business Card Maker</h1>
    </div>
)
}

export default Header