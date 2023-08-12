import { useReducer } from "react";
//complex/raw useEffect form
//1. Counter
//2. Manage Multiple States
//3. Login Form

function reducer(state,dispatch){
	switch(dispatch){
	case 'increment':
	return state+1;
	case 'decrement':
	return state-1;
	default:
	throw new Error();
}
}

function Red(){
const [state,dispatch] = useReducer(reducer,0);
//newState = reducer(currentState,action)
return(
    <div>
	<div>count: {state}</div>
    <button onClick={() => dispatch({type:'decrement'})}>+</button>
    <button onClick={() => dispatch({type:'increment'})}>-</button>
    <div>count: {state}</div>
	</div>
)
}

export default Red;