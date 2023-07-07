import React, { useState } from 'react'
import "./App.css"

const App = () => {
 const [count ,setCount]=useState(0);
 const[colorValue, SetColorValue]=useState("black");
  return (
    <div className='App'>
    <h1 style={{color :colorValue}}>Counter App Using State</h1>
      <h1 style={{color :colorValue}}>Current Count is : {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
        SetColorValue(colorValue === "black"?"red":"black")
      }} >Increase Count</button>
      <button onClick={()=>(setCount(count-1))}>Decrease Count</button>
      <button onClick={()=>(setCount(0))}>Reset Count</button>
    </div>
  )
}

export default App
 