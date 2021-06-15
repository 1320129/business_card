import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({name,imageuploader,changeimage}) => {
    const inputRef = useRef();
    const oninput = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async e  => {
        const image = e.target.files[0];
        const uploaded = await imageuploader.upload(image);
        const image_info = {
            fileName:uploaded.original_filename,
            fileURL:uploaded.url,
        }
        changeimage(image_info);
        
    }

    return (<div className={styles.container}>
                <input type="file" accept="image/*" name="file" ref={inputRef} className={styles.input} onChange={onChange}/>
                <button onClick={oninput} className={styles.button}>{name || "nofile"}</button>
            </div>
            )
}

export default ImageFileInput;
