//3 marks
//do by own, hint or typing
import React from "react";

import A from './css/A.jpg' 
import B from './css/B.jpg' 
import C from './css/C.jpg' 

import { useState } from "react";

let img = [A,B,C];

function Carausel(){
    let [i,seti]=useState(0);
    function left(){
        if(i==0)seti(2);
        else seti(i-1);
        console.log(i,'left')
    }
    function right(){
        if(i==2)seti(0)
        else seti(i+1)
        console.log(i,'right')
    }
    return(
        <div>
            Carausel
            <img src={img[i]} />
            <button onClick={left}>Left</button>
            <button onClick={right}>Right</button>
        </div>
    )
}

export default Carausel;