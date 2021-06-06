import React from 'react';
import styles from './card.module.css';

const Cardlist = ({card}) => {

    return(
        <div className={styles.card_list}>
            <h2>Card Preview</h2>
            {card.map(card => {

                return (
                <div className={styles.card_preview}>
                    <img src="/images/default_logo.png" className={styles.list_img_area}/>
                    <div className={styles.list_text_area}>
                        <div>{card.name}</div>
                        <div>{card.company}</div>
                        <div>{card.color}</div>
                        <div>{card.position}</div>
                        <div>{card.email}</div>
                        <div>{card.description}</div>
                    </div>
                </div>
                    )
                })}
        </div>
    );
}

export default Cardlist;