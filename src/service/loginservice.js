import firebase from 'firebase';
import firebaseApp from '../service/firebase';

class AuthService{
    login(providerName){
        const authprovider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authprovider)
    }
    logout(){
        return firebase.auth().signOut()
        .then(() => {console.log('goog')})
        .catch((error) => {console.log('no') });
    }
}

export default AuthService;

