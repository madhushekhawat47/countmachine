import React, { useState } from 'react';

const App =()=>
{
    const state =useState();
    const [count,setCount]=useState(0);

    const IncNum =()=>
    {
        setCount(count+1);
    // console.log('clicked'+ count++);
    };
//console.log(state);
    // const name=['ma','dh','u'];
    // const [ma,dh,u]=name;//array distructoring
    

    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    );

};
export default App;