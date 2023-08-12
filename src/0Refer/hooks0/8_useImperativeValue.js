import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref){
    useImperativeHandle(ref, ()=>{
        return {
            // ... your methods ...
        };
    })
},[]);
// ...