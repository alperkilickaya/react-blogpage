import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';



export default function PrivateRoute({ component: Component, ...rest}) {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser)
    return (
        <Route
        {...rest} 
        render = {props=>{
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}
        > 
        </Route>
    )
}


