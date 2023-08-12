//3 marks
//multilevel prop passing
import {createContext} from 'react'
import State from './1_useState';
let obj={
    gaurav:'kumar',
    city:'Muzaffarpur'
}
//copve: createContext object Provider value export

let Ans=createContext(obj);

function Con(){
    return(
        <Ans.Provider value={obj}>
        <div>
            <State/>
        </div>
        </Ans.Provider>
    )
}

export default Con;
export {Ans}