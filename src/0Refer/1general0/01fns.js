//3 marks Total : 34 Time = marks End Time = current time + marks(min) 
//End time:
//mrffjss map reduce filter forEach join slice splice
//async await setT/I Pr Callbacks 
//call apply bind

//do by own, hint or typing

import React from "react";
import Home from "../../projects/home";

function Fns(){
    let list0 = [1,2,3,4];
    let list1 = ['gaurav','saurav','kaurav','pandav'];
    let results=[];
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    //5* join
   const fruit = ['Apple', 'Grapes', 'Kela']
   console.log(fruit.join(' and '))

    function fn(){
        console.log('Gaurav')
    }
    setTimeout(fn,1000);

    function func(){
        
        console.log('done')
        setTimeout(fn,5000);
    }

    async function dy(){
        let p= await func();
        return p;
    }

    dy();

    async function foo() {
        return 1;
      }
      
     // It is similar to:
      
    function foo() {
        return Promise.resolve(1);}

    let prom=new Promise((res,rej)=>{
        let pp=11;
        if(pp>10) res('S')
        else rej('F')
    })

    prom.then((val)=>{
        console.log(val)
    })

    .catch((err)=>{
        console.log(err);
    })

    .finally(
        console.log('completed')
    )




    return(
        <div>
            <Home/>
            Fns
            Map: 
            Uses: 1a traverse a list of elements, 
                  1b traverse a list of elements using keys
            {list1.map((v,i)=>{
                return(
                    <div>{i+1} {v}</div>
                )
            })}

            forEach: 
                Uses   2a manipulate list and push into another to show another list 
            {list0.forEach((v,i)=>{
                results.push(
                    <div>{i+1} {v+2}</div>
                )
            })}

            {results}

            Reduce: single value return

            {
                list0.reduce((iv,fv)=>{
                    return fv=iv+fv;
                },0)
            }

            <div>
            Filter: conditional

            {
                list0.filter((iv,fv)=>{
                    if(iv>2)
                    return iv
                })
            }
            </div>

            Slice for subset

            {
                list0.slice(0,4)
            }

            <div>
            Splice for subset and insert
            {
                
                fruits.splice(0,4,'hjvgh')
            }
            </div>
            Promise all any async await setI/T
            
        </div>
    )
}

export default Fns;