import React from 'react';
import styles from './card.module.css';
import Button from '../button/button';


const Card = ({card}) => {
    const onClick = () => {
        
    }
    return(
        <div className={styles.card_make}>
            <h2>Card Maker</h2>
            
            <div className={styles.card_list}>
               
                    {card.map(card => {
                        return (
                        <form className="card">
                            <input type="text" value={card.name}/>
                            <input type="text" value={card.company}/>
                            <input type="text" value={card.color}/>
                            <input type="text" value={card.position}/>
                            <input type="text" value={card.email}/>
                            <textarea type="text" value={card.description}/>
                            <Button name={'delete'}onClick={onClick}/>
                        </form>
                        
                            )
                    })}
                
            </div>
        </div>
    );
}

export default Card