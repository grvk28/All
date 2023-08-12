// 3 marks
//do by own, hint or typing import React from "react";
import Home from "../../projects/home";
import './css/1.css';
import React, {useState} from 'react'
import LoginForm from "./loginform";
import Navbar from "./navbar";
import Modal from 'react-modal';

function Popup(){
    const [isShowLogin,setIsShowLogin]=useState(true)

    const handleLoginClick = () =>{
        setIsShowLogin((isShowLogin)=>!isShowLogin)
    }
    return(
        <div>
            <Navbar handleLoginClick={handleLoginClick}/>
            <LoginForm isShowLogin={isShowLogin}/>
        </div>
    )
}

//export default Popup;



//import { useState } from "react";

const customStyles = {
    content: {
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%,-50%)'
    }
}

//Modal.setAppElement('#yourAppElement')

function Administration(){
    let subtitle;
    const [modalIsOpen,setIsOpen]=useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function afterOpenModal(){
        subtitle.style.color='#f00'
    }

    function closeModal(){
        setIsOpen(false);
    }

    return(
        <div>
          

            <div style={{position:'relative',top:'200px'}}>
            <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}>
        
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          
        </form>
      </Modal>
    </div>
            </div>
            
        </div>
    )
}

export default Administration