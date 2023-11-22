import React from "react"
import { Navigate } from "react-router-dom"


export function PrivateRoute({ children }) {

    // const user = false;
    const user = sessionStorage.getItem('logado');
  
    return user ? children : <Navigate to='/login'/>;
  
}