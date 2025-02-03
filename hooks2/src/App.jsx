import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setCount(count + 1);
  },[])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>Click here</button>
    </>
  )
}

export default App
