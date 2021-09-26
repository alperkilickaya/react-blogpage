import React, {createContext, useState, useEffect} from 'react'
import {userObserver} from '../helpers/firebase'

export const AuthContext = createContext()

function AuthProvider(props) {

    const [ currentUser, setCurrentUser] = useState()
    const [ blogCard, setBlogCard] = useState([])

    useEffect(()=>{
        userObserver(setCurrentUser);
    },[])

    return (
        <AuthContext.Provider value={{currentUser, blogCard, setBlogCard}}>
            {props.children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider;

