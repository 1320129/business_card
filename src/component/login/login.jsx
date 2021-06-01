import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


const Login = ({authService}) => {
    const loginService = (target) => {
        console.log(target.currentTarget.textContent);
        authService.login(target.currentTarget.textContent);
        
    }
    return(
        <>
            <Header/>
                <section>
                    <h1>Login</h1>
                    <ul>
                        <li><button onClick={loginService}>Google</button></li>
                        <li><button onClick={loginService}>Github</button></li>
                    </ul>
                </section>
            <Footer/>
        </>
    );
}

export default Login