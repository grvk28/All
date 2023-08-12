import {useState,useEffect} from 'react'
import structuredClone from '@ungap/structured-clone'

function AutoInc(){
    const [counter,setcounter]=useState(-1)
    
    var timer;
    useEffect(()=>{
        timer=counter>-1 && setTimeout(()=>{
            setcounter(counter+1)
        },1000)
    },[counter])

    //setInterval(()=>setcounter(counter+1),1000)
    
   //setcounter(counter+1)
   let start=()=>{
    setcounter(0);
   }

   let stop=()=>{
    clearTimeout(timer)
   }
    
    

    return(
        <div>
            Countdown: {counter==-1?0:counter}
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default AutoInc