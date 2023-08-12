//3 marks
//do by own, hint or typing

import React from "react";
import './css/clickshow.css'
import { useEffect,useState } from "react";

function Clickshow(){
    let [val,setval]=useState(false);
    function funone(){
        if(!val){
            var r = document.getElementsByClassName('levtwo')[0]
            r.style.display='block';
            setval(true)
        }
        else{
            var r = document.getElementsByClassName('levtwo')[0]
            r.style.display='none';
            setval(false)
        }
        
    }

   

    return(
        <div className="abc">
            Clickshow
            <button className="levone"  id="aone" onClick={funone} >
                Gaurav v
            </button>
            <div className="levtwo">
                <button>Button1</button>
                <button>Button2</button>
                <button>Button3</button>
            </div>
        </div>
    )
}

export default Clickshow;