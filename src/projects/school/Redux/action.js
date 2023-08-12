import {STUDENTS,TEACHERS,STAFFS} from './type'

export const action1=()=>{
    console.log('action1')
    return{
        type:STUDENTS,
        payload:[]
    }
}

export const action2=()=>{
    console.log('action2')
    return async(dispatch)=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/comments')
        const res=await data.json()
        dispatch({type:TEACHERS,payload:res})
    }
}

export const action3=()=>{
    console.log('action3')
    return async(dispatch)=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/posts')
        const res=await data.json()
        dispatch({type:TEACHERS,payload:res})
    }
}

export const action4=()=>{
    console.log('action4')
    return async(dispatch)=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/photos')
        const res=await data.json()
        dispatch({type:TEACHERS,payload:res})
    }
}

export const action5=()=>{
    console.log('action5')
    return async(dispatch)=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/albums')
        const res=await data.json()
        dispatch({type:TEACHERS,payload:res})
    }
}

export const action6=()=>{
    console.log('action6')
    return async(dispatch)=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/todos')
        const res=await data.json()
        dispatch({type:TEACHERS,payload:res})
    }
}

export const action8=()=>{
    console.log('action8')
    return async(dispatch)=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/users')
        .then(val=>val.json())
        .then(dat=>console.log(dat))
        const res=await data.json()
        console.log(res)
        dispatch({type:TEACHERS,payload:res})
    }
}

const data= fetch('https://jsonplaceholder.typicode.com/users')
            .then(val=>val.json())
            .then(data=>console.log(data))
            console.log(data)

console.log(action8)