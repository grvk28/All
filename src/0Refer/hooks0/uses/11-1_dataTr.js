import React from "react";
import {useLocation} from 'react-router-dom'

function Nav(){
    
    const location=useLocation();

   
    return(
        <>
        <div>{location.state.id}</div>
        </>
    )
}