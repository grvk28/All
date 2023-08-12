import React from 'react'

const Foc = () => {
    let names=['Gaurav','Saurav','Juhi','Heena']
    console.log('hi')
    function func(i){
        let r=document.getElementById(i)
        console.log(r)
        //r.style.backgroundColor='red'
    }
  return (
    <div className='Focus'>
        {names.map((v,i)=>{
            return(
                <button onClick={func('Gk'+i)} id={'Gk'+i}>{v}</button>
            )
        })}
    </div>
  )
}

export default Foc