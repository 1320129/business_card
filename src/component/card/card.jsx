import React, { useRef } from 'react';
import styles from './card.module.css';
import Button from '../button/button';
import Card_add_form from '../card _add_form/card_add_form';


const Card = ({Fileput,card,onAdd,updatecatd,deletecard,changeimageinfo}) => {

    const Nameref = useRef();
    const Companyref = useRef();
    const Colorref = useRef();
    const Positionref = useRef();
    const Emailref = useRef();
    const Descriptionref = useRef();
    const formref = useRef();


    
    return(
        <div className={styles.card_make}>
            <h2>Card Maker</h2>
            
            <div className={styles.card_make_list}>
               
                    {Object.keys(card).map(key => {
                        const onChange = (e) => {
                            if(e.currentTarget == null){
                                return;
                            }
                            e.preventDefault();
                            updatecatd({...card[key],[e.currentTarget.name]:e.currentTarget.value});
                        }

                        const changeimage = (e) => {
                            updatecatd({...card[key],fileName:e.fileName,fileURL:e.fileURL});
                        }

                        const onClick = (ev) => {
                            ev.preventDefault();
                            deletecard(card[key])
                        }
                        return (
                        <form className={styles.card} key={card[key].id} ref={formref}>
                            <input type="text" name="name" value={card[key].name} className={styles.col_3} onChange={onChange} ref={Nameref}/>
                            <input type="text" name="company" value={card[key].company} className={styles.col_3} onChange={onChange} ref={Companyref}/>
                            <select name="color" value={card[key].color} className={styles.col_3} onChange={onChange} ref={Colorref}>
                                <option value="Light">Light</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                            </select>
                            <input type="text" name="position" value={card[key].position} className={styles.col_2} onChange={onChange} ref={Positionref}/>
                            <input type="text" name="email" value={card[key].email} className={styles.col_2} onChange={onChange} ref={Emailref}/>
                            <textarea type="text"name="description" value={card[key].description} className={styles.col_1} onChange={onChange} ref={Descriptionref}/>
                            <Fileput changeimage={changeimage} name={card[key].fileName}/>
                            <Button name={'delete'} onClick={onClick}/>
                        </form>
                        
                            )
                    })}
                
            </div>
            <Card_add_form card={card} onAdd={onAdd} Fileput={Fileput}/>
        </div>
    );
}

export default Card