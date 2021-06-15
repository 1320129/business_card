import React from 'react';
import styles from './card.module.css';



const Cardlist = ({card}) => {
    const default_image = '/images/default_logo.png';
    return(
        <div className={styles.card_list} >
            <h2>Card Preview</h2>
            {Object.keys(card).map(key => {
                return (
                <div className={`${styles.card_preview} ${getbgcolor(card[key].color)}`} key={card[key].id}>
                    <div className={styles.list_img_area}>
                        <img src={card[key].fileURL||default_image} className={styles.list_img}/>
                    </div>
                    <div className={styles.list_text_area}>
                        <h3 className={styles.preview_title}>{card[key].name}</h3>
                        <p className={styles.preview_br}>{card[key].company}</p>
                        <div>{card[key].position}</div>
                        <a href={`mailto:${card[key].email}`} className={styles.email}>{card[key].email}</a>
                        <div>{card[key].description}</div>
                    </div>
                </div>
                    )
                })}
        </div>
    );
}

function getbgcolor(bgcolor){
    switch (bgcolor) {
        case 'Light':
        return styles.light;
        case 'Red':
        return styles.red;
        case 'Blue':
        return styles.blue;
        default:
            throw new Error(`un defind: ${bgcolor}`);
    }
}

export default Cardlist;