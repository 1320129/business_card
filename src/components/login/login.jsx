import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: '/firebase-pr/maker',
      state: { id: userId.user.uid, name:userId.user.displayName},
    });
  };

  const Login_warning = () => (
    <>
    <p className={styles.title}>Firebase 로그인 api 입니다.</p>
    <p className={styles.title}>*어떠한 개인정보도 받지 않습니다.*</p>
    </>
    )
  

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.section}>
        <h1 className={styles.login_title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer Login_warning={Login_warning}/>
    </section>
  );
};

export default Login;
