import React, {createContext, useState, useEffect} from 'react'
import {userObserver} from '../helpers/firebase'

export const AuthContext = createContext()

function AuthContextProvider(props) {

    const [ currentUser, setCurrentUser] = useState()
    //console.log("Şuanki Kullanıcı", currentUser)

    useEffect(()=>{
        userObserver(setCurrentUser);
    },[])

    return (
        <AuthContext.Provider value={{currentUser}}>
            {props.children}
        </AuthContext.Provider>
        
    )
}

export default AuthContextProvider;

