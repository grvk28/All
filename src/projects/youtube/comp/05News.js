import A from './img/a.jpg'
import B from './img/b.jpg'
import C from './img/c.jpg'
import D from './img/d.jpg'
import { useState } from 'react'
import './css/1.css'

let imj=[A,B,C,D];

function Carausel(){
    let [i,seti]=useState(0);
    function left(){
        if(i==0)seti(3);
        else seti(i-1);
        console.log(i,'left')
    }
    function right(){
        if(i==3)seti(0)
        else seti(i+1)
        console.log(i,'right')
    }
    function fn1(){seti(0)}
    function fn2(){seti(1)}
    function fn3(){seti(2)}
    function fn4(){seti(3)}
    return(
        <div>
            <img className='img-main' src={imj[i]}/>
            <button onClick={left} className='btn-A'>L</button>
            <button onClick={right} className='btn-B'>R</button>
            <div className='img-shift'>
                <button onClick={fn1}></button>
                <button onClick={fn2}></button>
                <button onClick={fn3}></button>
                <button onClick={fn4}></button>
            </div>
        </div>
    )
}

export default Carausel;