import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/nav/Nav.component';
import Footer from '../../components/footer/Footer.component';
import Main from '../../components/main/Main.component';


function App() {

//DomPurify
  return (
    <>
    <Nav/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
