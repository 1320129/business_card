import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Card from '../card/card';
import Cardlist from '../card/cardlist';
import { useHistory } from 'react-router-dom';


const Maker = ({Fileput, authService, cardRepository}) => {
    const history = useHistory();
    const historyState = history.location.state;
   const [card, setcard] = useState({});
   const [userId, setUserId] = useState(historyState && historyState.id);
   
   

    
   useEffect(() => {
    authService.loginchange(user => {
      if (user) {
        setUserId(user.uid);
        console.log(userId);
      } else {
        history.push('/');
      }
    });
  });

  const Addorupdatecatd = (card) => {
    setcard(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

    const deletecard = (change) => {
        console.log(change);
        const updated = {...card};
        delete updated[change.id];
        setcard(updated);
        cardRepository.removeCard(userId, change);
    }

    const imageupdate = (change) => {
        console.log(change);
    }
    return (
    <div className={styles.maker_wrap}>
        <Header authService={authService}>

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