import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';


const Login = ({authService}) => {
    const loginService = (target) => {
        console.log(target.currentTarget.textContent);
        authService.login(target.currentTarget.textContent);
        
    }
    return(
        <div className={styles.login_wrap}>
            <Header/>
                <section>
                    <h1 className={styles.cont_title}>Login</h1>
                    <ul className={styles.list}>
                        <li><button onClick={loginService}>Google</button></li>
                        <li><button onClick={loginService}>Github</button></li>
                    </ul>
                </section>
            <Footer/>
        </div>
    );
}

export default Login