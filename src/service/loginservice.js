import firebase from 'firebase';
import firebaseApp from '../service/firebase';

class AuthService{
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
      }

    logout(){
        firebase.auth().signOut();
    }

    loginchange(onUserchange){
       firebase.auth().onAuthStateChanged((user) => {
           onUserchange(user);
       })
    }
}

export default AuthService;


