import React from "react";
import {useNavigate} from 'react-router-dom'

function Nav(){
    const id=5;
    const navigate=useNavigate();

    function goToAbout(){
        navigate('/about',{state:{id:id}})
    }
    return(
        <>
        <button onClick={goToAbout}>About</button>
        </>
    )
}