import React from 'react'
import'../index.css'
import { useNavigate } from 'react-router-dom'

const MainContainer = () => {
  const navigate=useNavigate()
  const handleEmailClick=()=>{
    console.log("chat clicked")
    navigate("/email")
    
  }
  const handleChatClick=()=>{
    console.log("chat clicked")
    navigate("/chat")
    
  }
  return (
    <div className="app-container">
        <div className='app-card'>
          <button onClick={()=>{handleChatClick()}}> Launch Chat App</button>
        </div>
        <div className='app-card'>
        <button onClick={()=>{handleEmailClick()}}> Launch Email App</button>
        </div>
    </div>
  )
}

export default MainContainer