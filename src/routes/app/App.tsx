import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/nav/Nav.component';
import Footer from '../../components/footer/Footer.component';
import BlogCardList from '../../components/blogCardList/BlogCardList.component';


function App() {
const navigate = useNavigate();

//DomPurify
  return (
    <>
    <Nav></Nav>
    <button onClick={()=>navigate("/blog/OLAadm13")}>Click</button>
    <BlogCardList></BlogCardList>
    <Footer></Footer>
    </>
  )
}

export default App
