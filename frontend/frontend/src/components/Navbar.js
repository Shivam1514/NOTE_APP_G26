import React from 'react'

function Navbar() {
  return (
    <>
    <div className="navbar h-[90px] bg-[#f4f4f4] flex items-center justify-between w-screen px-[50px]">
        <h1 className='logo text-2xl'>Keep Notes</h1>
        <div className="right flex items-center justify-between gap-[10px]">
            <button className="btnNormal">Add Note</button>
            <div className="profileCircle w-[50px] h-[50px] rounded-[50%] bg-slate-400"></div>

        </div>

    </div>
    </>
  )
}

export default Navbar
