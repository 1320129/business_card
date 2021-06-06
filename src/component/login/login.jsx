import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import {useHistory} from 'react-router-dom';



const Login = ({authService}) => {
    const history = useHistory();
    const viewMaker = (data) => {
        history.push({
            pathname:'maker',
            state:{id: data}
        })
    }
    const loginService = (target) => {
        authService.login(target.currentTarget.textContent)
        .then(data => viewMaker(data.user.uid));
    }
    useEffect(() => {
        authService.loginchange( user => {
            user  && viewMaker(user.uid);
        })
    })
    return(
        <div className={styles.login_wrap}>
                <Header onLogout={authService}/>
                        <section >
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