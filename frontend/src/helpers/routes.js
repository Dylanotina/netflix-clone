import React from "react";
import { Navigate, useLocation } from "react-router-dom";




export function IsUserRedirect({user ,children}){
    if(!user){
        return children
    }
    if(user){
        return <Navigate to ='/browse' replace />
    }
    return null
}

export function ProtectedRoute({user, children}){
    const location = useLocation()
    if(user){
        return children
    }
    if(!user){
        return <Navigate to='/signin' replace state={{path : location.pathname}}/>
    }
    return null
}
