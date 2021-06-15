import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Card from '../card/card';
import Cardlist from '../card/cardlist';


const Maker = ({Fileput,onLogout}) => {
   const [card, setcard] = useState({
       '1': {id:1,name:'Hyuk',company:'company',color:'Light',position:'Web developer',email:'shwogur2000@Naver.com',description:'my introduce is...',fileName:'jeah',fileURL:null},
       '2': {id:2,name:'Hyuk2',company:'company',color:'Red',position:'Web developer',email:'shwogur2000@Naver.com',description:'my introduce is...',fileName:'jeah',fileURL:null},
       '3': {id:3,name:'Hyuk3',company:'company',color:'Blue',position:'Web developer',email:'shwogur2000@Naver.com',description:'my introduce is...',fileName:'jeah',fileURL:null},
   });

   

    
   useEffect(()=>{
    
   },[card])

    const Addorupdatecatd = (change) => {
        console.log(change);
        const updated = {...card};
        updated[change.id] = change;
        setcard(updated);
    }

    const deletecard = (change) => {
        console.log(change);
        const updated = {...card};
        delete updated[change.id];
        setcard(updated);
    }

    const imageupdate = (change) => {
        console.log(change);
    }
    return (
    <div className={styles.maker_wrap}>
        <Header onLogout={onLogout}>

        </Header>
        <div className={styles.container}>
            <Card card={card} onAdd={Addorupdatecatd} setcard={setcard} updatecatd={Addorupdatecatd} deletecard={deletecard} Fileput={Fileput} changeimageinfo={imageupdate}/>
            <Cardlist card={card}/>
        </div>
        <Footer>

        </Footer>
    </div>
)

}

export default Maker;