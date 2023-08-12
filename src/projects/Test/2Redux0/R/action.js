//5 marks
import {REAR,VIEW} from './type'

export const Action1=()=>{
    return{
        type:REAR,
        payload:[1,2,3,4,5]
    }
}

export const Action2=()=>{
    return{
        type:VIEW,
        payload:[1,2,3,4,5]
    }
}