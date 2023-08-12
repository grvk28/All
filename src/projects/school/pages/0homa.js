import { useSelector,useDispatch } from "react-redux"
import Header from "../comp/01Header"
import './css/1.css'
import Menu from "../comp/02Menu"
import Notice from "../comp/03Notice"
import Achiev from "../comp/04Achiev"
import Carausel from "../comp/05Carousel"
import Footer from "../comp/06Footer"
import store from "../store"
import reducers from "../Redux/reducer"
import { action1,action2 } from "../Redux/action"
import { useState,useEffect } from "react"


function School(){
    let [val,setval]=useState({})
    let s=useSelector(state=>state.no)
    let ss=useSelector(state=>state.todo)
    console.log(ss)
    const dispat=useDispatch()
    
    useEffect(()=>{
        const data= fetch('https://jsonplaceholder.typicode.com/users')
            .then(val=>val.json())
            .then(data=>dispat({type:'STUDENTS',todo:data}))
    },[])
    
    console.log(store.comments)
    const dispatch=useDispatch()
    //setval(dispatch(action2()))
    
    //setval(action2.payload)
    console.log(action2.payload)
    function Fn(){
        dispatch(action1())
    }
    return(
       
        <div className="sch-pg"> 
        
        <Header/>
        
        
        
        <div style={{position:'sticky',top:'-120px',zIndex:'8'}}><Menu/></div>
        
        <Notice/>
        <Achiev/>
        <Carausel/>
        <div style={{
            color:'red',
            zIndex:10,
            position:'relative'
            }}></div>
        <button
        style={{position:'relative',top:'200px'}}
         onClick={()=>dispatch(action1())}>{s}</button>

        <Footer/>
        </div>

    )
}

export default School