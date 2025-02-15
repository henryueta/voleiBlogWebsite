import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/nav/Nav.component';


function App() {
const navigate = useNavigate();

//DomPurify
  return (
    <>
    <Nav></Nav>
    <button onClick={()=>navigate("/blog/Adkwqoir0-21")}>Click</button>
    </>
  )
}

export default App
