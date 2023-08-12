import React from "react";
import { Link } from "react-router-dom";
import Fire from "../comp/zExtra/firecrackers";
import Hovershow from "../comp/1general0/09hovershow";
import './App.css'
import { useEffect, useState, useContext, useCallback, useReducer } from "react";

function Home(){
    useEffect(()=>{
        fetch('google.com')
        .then((val)=>{
            console.log(val)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    function login(){
        
    }

    return(

     <div className="home">
     <button className="menu">
        <div>Menu</div>
        <div className="list">
        <Link className="hlink" to='/'>
            Gaurav
        </Link>
        <Link className="hlink" to='/test'>test</Link>
        <Link className="hlink" to='/api'>api</Link>
        <Link className="hlink" to='/hooks'>hooks</Link>
        <Link className="hlink" to='/copy'>copy</Link>
        <Link className="hlink" to='/popup'>popup</Link>
        <Link className="hlink" to='/rnav'>rnav</Link>
        </div>
     </button>
     <div className="hl">
     <Link className="hlink" to='/'>
            <div className="gaurav">gaurav
            <div className="hove"><Hovershow/></div>
            </div>
     </Link>
     <Link className="hlink" to='/test'>test</Link>
     <Link className="hlink" to='/api'>api</Link>
     <Link className="hlink" to='/hooks'>hooks</Link>
     <Link className="hlink" to='/copy'>copy</Link>
     <Link className="hlink" to='/popup'>popup</Link>
     <Link className="hlink" to='/rnav'>rnav</Link>
     </div>
     <div className="hl">
     <button onClick={login}>Login</button>
     </div>
        </div>

        
    )
}

export default Home;