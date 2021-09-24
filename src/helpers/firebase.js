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

export const createUser = async (email, password, username) => {
    try{
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((userCredential) =>{
            //signed in
            //var user = userCredential.user;
            //console.log("Kayıt Olan Kullanıcı", user);
            
        })
        .catch((error)=>{
            //var errorCode = error.code;
            //var errorMessage = error.message;
        });

        const currentUser = firebase.auth().currentUser;
        await currentUser.updateProfile({username})
    }catch(error){
        alert("Bu mail ile daha önce kayıt oluşturulmuş!")
    }
}

export const SignIn = async (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        // Signed in
        //var user = userCredential.user;
        //console.log('SIGNIN user', user)
        
    })
    .catch((error)=>{
        //var errorCode = error.code;
        //var errorMessage = error.message;
        alert("Kullanıcı adı veya şifre hatalı!")
    })

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