class Imageuploader{
    async upload(file){
        const data = new FormData();
        data.append('file',file);
        data.append('upload_preset','ql6ihk35');
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/dn6n0b0js/upload',
            {
                method:'POST',
                body:data,
            }
            
        );
        return await result.json();
    }
}

export default Imageuploader;