import React from 'react'

function Note(note,height,index) {
  return (
    <>
    <div className="note relative ">
        <p className='text-[grey]'>Note {index+1}</p>
        <h1 className='text-[#000] text-[20px] w-[80%]'>{note.title}</h1>
        <p className='text-[grey] w-[80%] line-clamp-4'>
            {note.description}
        </p> 
        <div className="noteBottom absolute botton-5 w-[93%] flex justify-between items-center">
            <p className='text-[grey]'>{new Date(note.date).toDateString()}</p>
            <div className="flex items-center gap-1">
                <img className='w-[30px] h-[30px]' src={require("../Images/OIP.jpeg")} alt="" />
                <img className='w-[30px] h-[30px]' src={require("../Images/download.jpeg")} alt="" />


            </div>
            </div>   
    </div>
    </>
  )
}

export default Note
