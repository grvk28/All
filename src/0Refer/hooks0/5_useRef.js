import {useRef} from 'react'
//store a mutable value that does not cause re-render
//highlight,Playback,Animation,Text Selection
function Ref(){
	const myBtn=useRef(null);
	const handleBtn = () => {
        myBtn.current.click();
        console.log('hi',myBtn)
    }
	return(
    <button ref={myBtn} onClick={handleBtn}>Ref
		</button>)
}

export default Ref;