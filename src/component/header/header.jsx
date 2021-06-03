import React from 'react';
import styles from './header.module.css';


const Header = ({onLogout}) => (
    <div className={styles.header}>
        {true && <button onClick={onLogout} className={styles.logout}>Logout</button>}
        <img src="/images/logo.png" className={styles.logo}></img>
        <h1 className={styles.title}>Business Card Maker</h1>
    </div>
);

export default Header