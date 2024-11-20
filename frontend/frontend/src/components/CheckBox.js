import React, { useEffect, useState } from 'react'

function CheckBox({title,check,setCheck}) {

   
    const toggleCheckBox =()=>{
        let checkbox = document.querySelector('.checkbox');
        checkbox.classList.toggle('active');
        setCheck(!check);
    }

    useEffect(()=>{
        let checkbox = document.querySelector('.checkbox');
        check ? checkbox.classList.add("active") : checkbox.classList.remove("active")
    },[check])


  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <div onClick={toggleCheckBox} className='checkbox w-[20px] h-[20px] cursor-pointer bg-[grey]'></div>
        <p>{title}</p>
      </div>
    </>
  )
  
}

export default CheckBox