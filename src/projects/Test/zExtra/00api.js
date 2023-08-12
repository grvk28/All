//3pgd put post patch get delete
//undone
//do by own, hint or typing

import React from "react";
//import Home from "../home";

function Api(){
    const p= fetch('')
    .then(val=>val.json())
    .then(json=>console.log(json))
    fetch('',{method:'PUT',body:JSON.stringify({userid:1,title:"clean",completed:false}),headers:{"Content-type":"application/json; charset:UTF-8"}})
    .then(val=>val.json())
    .then(json=>console.log(json))
    fetch('',{method:'POST',body:JSON.stringify({userid:1,title:"clean",completed:false}),headers:{"Content-type":"application/json; charset:UTF-8"}})
    .then(val=>val.json())
    .then(json=>console.log(json))
    fetch('',{method:'PATCH',body:JSON.stringify({userid:1,title:"clean",completed:false}),headers:{"Content-type":"application/json; charset:UTF-8"}})
    .then(val=>val.json())
    .then(json=>console.log(json))
    fetch('',{method:'DELETE'})
    return(
            <div>
            
            Api
            Put 
            Post  
            patch
            get
            delete
        </div>
    )
}

export default Api;