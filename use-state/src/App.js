import React,{useState} from 'react'
import "./App.css"

const App = () => {
  const[inputValue ,setInputValue]=useState('')
  const manageInput=(e)=>{
setInputValue(e.target.value)
  }
  return (
    <div className='App'>
     <h1>Enter the Input: <input className='input' type="text"  onChange={manageInput}/></h1>
      <h1> Your Input is: {inputValue}</h1>
    </div>
  )
}

export default App