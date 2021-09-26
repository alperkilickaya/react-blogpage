import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5bJGRVva4FQaHT2-QWxCCJil_2s6K1zY",
    authDomain: "react-blogpage.firebaseapp.com",
    projectId: "react-blogpage",
    storageBucket: "react-blogpage.appspot.com",
    messagingSenderId: "116206546480",
    appId: "1:116206546480:web:dedc02a5d8ce100e2a87f5"

});

export const createUser = async (email, password, displayName) => {
    try{
        await firebase.auth().createUserWithEmailAndPassword(email,password)

        const currentUser = firebase.auth().currentUser;
        await currentUser.updateProfile({displayName})

    }catch(error){
        alert("Bu mail ile daha önce kayıt oluşturulmuş!")
    }
}

export const SignIn =  (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email,password)
}

export const userObserver = async (setCurrentUser) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });

}

export const SignUpProvider = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt : 'select_account'
      });

    firebase.auth()
      .signInWithPopup(provider)
}

export const Logout = async () => {
    await firebase.auth().signOut();
    
}

export default firebaseApp;