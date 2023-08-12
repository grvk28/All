import React, {useLayoutEffect, useState} from 'react';

const App = () => {
    const [value,setValue]= useState('gfg');

    useLayoutEffect(()=>{
        if (value === 'GFG'){
            //Changing the state
            setValue('gfg');
        }
        console.log('useLayoutEffect called',value)
    },[value]);

    return <div>{value} is the greatest portal for greeks!</div>
    
}

export default App;
