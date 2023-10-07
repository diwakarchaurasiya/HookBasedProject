import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  console.log(props)
  return <>
    <div className='card'>
      <img src={props.imageUrl}></img>
      <h1>{ props.userName}</h1>
      <p>{props.Profession}</p>
     <button>Add Friend</button>
    </div>
  </>
}

export default App
