// import React,{useState} from 'react'
// import "./App.css"

// const App = () => {
//   const[inputValue ,setInputValue]=useState('')
//   const manageInput=(e)=>{
// setInputValue(e.target.value)
//   }
//   return (
//     <div className='App'>
//      <h1>Enter the Input: <input className='input' type="text"  onChange={manageInput}/></h1>
//       <h1> Your Input is: {inputValue}</h1>
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'
import "./App.css"


const App = () => {
  const[textValue, SetTextValue]=useState(true);
  const[colorValue, SetcolorValue]=useState("black");

  return (
    <div className='.App'>
    <button onClick={()=>(SetTextValue(!textValue)

    )}>Show/Hide</button>

    <button onClick={()=>(SetcolorValue(colorValue === "black"?"red":"black"))}>ChangeColor</button>
      {textValue && <h1 style={{color :colorValue}} >Hy My Name is Anish Sharma</h1>}
     
    </div>
  )
}

export default App