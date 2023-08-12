//3 marks
import { useContext } from "react"
import { Ans } from "./3_useContext";
//add state to function components
//React useState and setState don't make changes directly 
//to the state object; they create queues to optimize
//performance, which is why the changes don't update immediately.
//Uses: 
//1. Counter 2. State management
//3. Toggle flags(T/F) 4. Store API data

function State(){
    let p=useContext(Ans);
    console.log(p)
    return(
        <div>Hi {p.city}</div>
    )
}

export default State