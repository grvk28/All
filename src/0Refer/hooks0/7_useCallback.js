import { useState,useCallback } from "react";
//memoize a whole function for performance optimization
function Callback(){
	const [ct,setct]=useState(60);
	
	const showct=useCallback(()=>{
		alert('Count ${count}');
	},[ct])
    return(
        <div></div>
    )
}

export default Callback;
