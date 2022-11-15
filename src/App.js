import React from "react";
import Confetti from "react-confetti"
import useWindowSize from 'react-use/lib/useWindowSize'
import { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState()
  const [luckyNum, setLuckyNum] = useState()
  const [output, setOutput] = useState("")
  const [lucky, setLucky] = useState(false)
  const { width, height } = useWindowSize()
 

  const calculateSum =(date) =>{
    let dateInt = date.replaceAll("-","")
    let sumDate = 0
    for(let i=0; i<dateInt.length; i++){
      sumDate+=Number (dateInt.charAt(i))
    }

    checkIfLucky(sumDate)

  }

  

  const checkIfLucky=(sumDate)=>{
    
    
    if(sumDate % luckyNum === 0){
      setLucky(true)
      setOutput("🎉Your birthday is lucky! 🎉")}
    else{
      setLucky(false)
      setOutput("Your birthday is not so lucky ☹️")
      
    }
  }

  const handleSubmit=()=>{
    calculateSum(date)
   
  }
  return (
   <>
   <h1>Is your birthday lucky?🍀</h1>
   
    <p className="intro"> Check if your birthday is lucky or not based on your lucky number!</p>
    <div className='container'>
    <label htmlFor='date-of-birth'>Date of Birth:</label><br/>
    <input  type='date' id='date-of-birth' onChange={(e)=>setDate(e.target.value)}/><br/>
    <label htmlFor='lucky-number'>Enter your lucky Number</label><br/>
    <input id='lucky-number' type='number' onChange={(e)=>{setLuckyNum(e.target.value)}}/><br/>
    <button className="btn" onClick={()=>handleSubmit()}>Check Number</button><br /><br/>
    <div className='output'>{output} </div>
    {lucky && 
    <Confetti 
        width={width}
        height={height}
      />}
    
   </div>
   </>
  );
}

export default App;
