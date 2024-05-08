import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter, setCounter] = useState(15);

 const addValue = () => {
  counter = counter + 1;
  setCounter(counter);
}

const removeValue = () => {
  counter = counter - 1;
  setCounter(counter);
}
  return (
    <>
     <h1> counter ={counter}</h1>
     <button onClick={addValue}>addvalue = {counter}</button>  <br />
      <button onClick={removeValue}>removevalue = {counter}</button> <br />
    </>
  )
}

export default App
