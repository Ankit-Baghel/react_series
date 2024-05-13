import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
    <div className=" fixed flex flex-wrap justify-center  items-center">
      <button className="p-2 bg-blue-500 text-white rounded-md"
      onClick={() => setcolor("blue")}>
        Change to blue
      </button>
      <button className="p-2 bg-red-500 text-white rounded-md"
      onClick={() => setcolor("red")}>
        Change to red
      </button>
      <button className="p-2 bg-green-500 text-white rounded-md"
      onClick={() => setcolor("green")}>
        Change to green
      </button>
      <button className="p-2 bg-yellow-500 text-white rounded-md"
      onClick={() => setcolor("yellow")}>
        Change to yellow
      </button>
 </div>

   </div>
  )
}

export default App
