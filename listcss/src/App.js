import React from 'react'
import planets from './planets'
import "./App.css"

const App = () => {
  const planetss= [
    {name: "Mars" , isGasPlanet:false},
    {name: "Earth" , isGasPlanet:false},
    {name: "Jupiter" , isGasPlanet:true},
    {name: "Venus" , isGasPlanet:false},
    {name: "Neptune" , isGasPlanet:true},
    {name: "Uranus" , isGasPlanet:true},
   
  ]
  return (
    <div className='App'>
      {planetss.map((planet ,key)=>{
        return <h1>
          {planet.isGasPlanet ?planet.name:""}
        </h1>
      })}
    </div>
  )
}

export default App