import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Card from '../card/card';
import Cardlist from '../card/cardlist';

const Maker = ({onLogout}) => {
    
   const [card, setcard] = useState([{name:'Hyuk',company:'whiteorange',color:'Dark',position:'Web developer',email:'shwogur2000@Naver.com',description:'my introduce is...'}]);
    
   useEffect(()=>{

   },[card])
    return (
    <div className={styles.maker_wrap}>
        <Header onLogout={onLogout}>

        </Header>
        <div className={styles.container}>
            <Card card={card}/>
            <Cardlist card={card}/>
        </div>
        <Footer>

        </Footer>
    </div>
)

}

export default Maker;