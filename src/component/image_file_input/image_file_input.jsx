import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name,imageuploader,changeimage}) => {

    const [load,loading] = useState(false);
    const inputRef = useRef();
    const oninput = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async e  => {
        const image = e.target.files[0];
        loading(true);
        const uploaded = await imageuploader.upload(image);
        loading(false);
        const image_info = {
            fileName:uploaded.original_filename,
            fileURL:uploaded.url,
        }
        changeimage(image_info);
        
    }

    return (<div className={styles.container}>
                <input type="file" accept="image/*" name="file" ref={inputRef} className={styles.input} onChange={onChange}/>
                {load == false 
                ?<button onClick={oninput} className={styles.button}>{name || "nofile"}</button> 
                :<button className={styles.loading}>Loading&#8230;</button> }
            </div>
            )
}

export default ImageFileInput;
