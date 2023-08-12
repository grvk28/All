//3 marks
//do by own, hint or typing

import React from "react";
import Home from "../../projects/home";
import structuredClone from '@ungap/structured-clone'


function Copy(){
    let obj={
        details:{
            firstname:'gaurav',
            lastname:'kumar',
            emails:{ 
                first:'gaurav91226591@gmail.com',
                second:'gk91226591@gmail.com'}
            },
        address:{
            fathername:'Shyam Nandan',
            city:'Muzaffarpur',
            pincode:'842003'
        }
        }
        JSON.parse(JSON.stringify(obj));
        let r=obj;
        let rr={...obj}
        let rr2= structuredClone(r)
        console.log(obj,r,rr,rr2)
    return(
        <div>
            <Home/>
            D S copy
        </div>
    )
}

export default Copy;