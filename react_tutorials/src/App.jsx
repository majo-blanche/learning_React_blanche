import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Person = (props) => {
    return (
    <>
        <h1>name:{props.name}</h1>
        <h2> last name:{ props.lastname}</h2>
        <h2>age:{ props.age}</h2>
    </>
  ) 
  }
function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <Person name="Majo" lastname="blanche" age="17"/>
      <Person name="Nekam" lastname="Aurore" age="20"/>
      <button onClick={()=>setCounter((minCount)=>minCount-1)}>-</button>
      <h1>{ counter}</h1>
      <button onClick={()=>setCounter((maxCount)=>maxCount+1)}>+</button>
       
    </div>
    
  );
}

export default App
