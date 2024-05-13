
import './App.css'
import Card from './components/Card.jsx'

function App() {
let myObj={
  name:"ankit",
  age:20,
  city:"surat"
}

  return (
    <>
      <h1 className='bg-4 bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
      <Card channel ="ankit baghel" btnText="click me"/>
      <Card channel="aman" btnText="visit me"/>
      
    </>
  )
}

export default App
