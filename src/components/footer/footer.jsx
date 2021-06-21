import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(({Login_warning}) => (
  <footer className={styles.footer}>
    <p className={styles.title}>React website!</p>
   {Login_warning &&  <Login_warning/>}
  </footer>
));

export default Footer;
