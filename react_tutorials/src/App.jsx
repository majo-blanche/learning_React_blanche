import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Person = () => {
    return (
    <>
        <h1>name:Majo</h1>
        <h2> last name:blanche</h2>
        <h2>age:17</h2>
    </>
  ) 
  }

function App() {
  return (
    <div className="App">
      <Person />
    </div>
    
  );
}

export default App
