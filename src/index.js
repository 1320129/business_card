import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/loginservice';
import Imageuploader from './service/fileupload';
import ImageFileInput from './component/image_file_input/image_file_input';

const authService = new AuthService();
const imageuploader = new Imageuploader();


const Fileput = (props) => (
  <ImageFileInput {...props} imageuploader={imageuploader}/>
)


ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} Fileput={Fileput} />
  </React.StrictMode>,
  document.getElementById('root')
);


