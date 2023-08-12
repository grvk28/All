//siasat
import {action1, action2,action3,action4,action5,action6,action8} from './action'
import { STUDENTS,TEACHERS,STAFFS } from './type';

let initialState={no:40,todo:[]};
console.log(initialState)

let reducers=(state=initialState,action)=>{
   switch (action.type){
    case STUDENTS:
    return{
      ...state,
      no:state.no-1,
      todo:action.todo //right
    }

    case TEACHERS:
    return{
      ...state,
      comments:action2.payload
    }
    default:{
      return state
    }

   } 
}

export default reducers