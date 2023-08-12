import Header from "../comp/01Header"
import Menu from "../comp/02Menu"
import Modal from 'react-modal';
import { useState } from "react";
//import Con from "../../../comp/hooks/3_useContext";
//import Ref from "../../../comp/hooks/5_useRef";
//import Red from "../../../comp/hooks/4_useReducer";
//import AutoInc from "../../../comp/hooks/uses/21_AutoInc";

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
          
            <Header/>
            <Menu/>
            <div style={{position:'relative',top:'200px'}}>
            <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <h2 >Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          
        </form>
      </Modal>
      {/* <Con/>
      <Ref/>
      <Red/>
      <AutoInc/> */}
    </div>
            </div>
            
        </div>
    )
}

export default Administration