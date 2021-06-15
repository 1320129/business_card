import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';


const Card_add_form = ({Fileput,card,onAdd}) => {
    const formRef = useRef();
    const Nameref = useRef();
    const Companyref = useRef();
    const Colorref = useRef();
    const Positionref = useRef();
    const Emailref = useRef();
    const Descriptionref = useRef();

    const [file,setfile] = useState({fileName:null,fileURL:null});

    const onfilechanfe = file => {
        setfile({
            fileName:file.fileName,
            fileURL:file.fileURL
        })
    }

    const onSubmit2 = (e) => {
        e.preventDefault();
        const card = {
            id: Date.now(),
            name: Nameref.current.value || "정보가 없습니다.",
            company: Companyref.current.value || "정보가 없습니다.",
            color: Colorref.current.value || "정보가 없습니다.",
            position: Positionref.current.value || "정보가 없습니다.",
            email: Emailref.current.value || "정보가 없습니다.",
            description: Descriptionref.current.value || "정보가 없습니다.",
            fileName: file.fileName,
            fileURL: file.fileURL
        }
        formRef.current.reset();
        onAdd(card);

        
    }

    return(
            <div className={styles.card_make_list}>
        

                        <form className={styles.card} ref={formRef}>
                            <input type="text" name="name" placeholder="Name" className={styles.col_3} ref={Nameref}/>
                            <input type="text" name="company" placeholder="Company" className={styles.col_3} ref={Companyref}/>
                            <select name="color" value={card.color} className={styles.col_3} ref={Colorref}>
                                <option value="Light">Light</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                            </select>
                            <input type="text" name="position" placeholder="Position" className={styles.col_2} ref={Positionref}/>
                            <input type="text" name="email" placeholder="E-mail" className={styles.col_2} ref={Emailref}/>
                            <textarea type="text"name="description" placeholder="Introduce" className={styles.col_1} ref={Descriptionref}/>
                            <Fileput  changeimage={onfilechanfe}/>
                            <Button name={'Add'} onClick={onSubmit2}/>
                        </form>
                        

                    
            </div>

    );
}

export default Card_add_form