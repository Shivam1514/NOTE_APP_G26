import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Note from '../components/Note'

function Home() {
  const[data,setData]=useState(null);
  const [error,setError]=useState();
  let getnotes=()=>{
    
  }
  return (
    <>
    <Navbar/>
    <div className="mt-[20px] flex items-center justify-between w-screen px-[50px]">
      <h1 className='text-2xl'>Hi, User</h1>
      <div className="inputBox !w-[350px]"></div>
      <input type="text"placeholder='Search Notes' className='!p-[10px]' />
      

    </div>
    <div className="gridItems">
        <Note/>
        <Note/>
        <Note/>
        <Note/>
      </div>
    </>
  )
}

export default Home
