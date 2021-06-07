import React from 'react';
import styles from './card.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';


const Card = ({card}) => {
    const onClick = () => {

    }
    return(
        <div className={styles.card_make}>
            <h2>Card Maker</h2>
            
            <div className={styles.card_make_list}>
               
                    {card.map(card => {
                        return (
                        <form className={styles.card}>
                            <input type="text" name="name" value={card.name} className={styles.col_3}/>
                            <input type="text" name="company" value={card.company} className={styles.col_3}/>
                            <select name="color" value={card.color} className={styles.col_3}>
                                <option value="Light">Light</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                            </select>
                            <input type="text" name="position" value={card.position} className={styles.col_2}/>
                            <input type="text" name="email" value={card.email} className={styles.col_2}/>
                            <textarea type="text"name="description" value={card.description} className={styles.col_1}/>
                            <ImageFileInput />
                            <Button name={'delete'}onClick={onClick}/>
                        </form>
                        
                            )
                    })}
                
            </div>
        </div>
    );
}

export default Card