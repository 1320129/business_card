import React from 'react';
import styles from './card.module.css';


const Card = ({card}) => {

    return(
        <div className={styles.card_make}>
            <h2>Card Maker</h2>
            
            <div className={styles.card_list}>
               
                    {card.map(card => {

                        return (
                        <div className="card">
                            <div>{card.name}</div>
                            <div>{card.company}</div>
                            <div>{card.color}</div>
                            <div>{card.position}</div>
                            <div>{card.email}</div>
                            <div>{card.description}</div>
                        </div>
                            )
                    })}
                
            </div>
        </div>
    );
}

export default Card