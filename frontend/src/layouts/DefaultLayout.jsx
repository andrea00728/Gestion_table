import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";

export default function DefaultLayout(){
    const {token}=useStateContext();

    if(!token){
        return <Navigate to="/"/>
    }
    return (
        <>
        <div>DefaultLayout</div>
        </>
    )
}