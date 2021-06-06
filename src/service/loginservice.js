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

    loginchange(onUserchange){
       firebase.auth().onAuthStateChanged((user) => {
           onUserchange(user);
       })
    }
}

export default AuthService;


