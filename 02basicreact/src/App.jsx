import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [Counter, setCounter] = useState(0);
  let [Counter2,setCounter2] = useState(0);
  const addevent = () => {
    setCounter(Counter + 1);
  };
  //For counter1
  useEffect(()=>{
    setTimeout(() => {
      setCounter(Counter + 1);
    }, 1000);
  },[])
  const subevent = () => {
    if(Counter > 0){
      setCounter(Counter - 1);
    }
    else{
      setCounter(Counter = 0)
    }
  };

  //For counter2
  useEffect(()=>{
    setTimeout(() => {
      setCounter2(Counter2 + 1);
    }, 1000);
  })

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {Counter}</h2>

      <button onClick={addevent}>+</button>
      <button onClick={subevent}>-</button>
      <br /><br />
      <h2>counter value : {Counter2}</h2>
    </>
    
  );
}

export default App;
