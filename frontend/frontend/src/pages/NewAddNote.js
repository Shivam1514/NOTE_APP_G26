import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import CheckBox from '../components/CheckBox';
import { useNavigate } from 'react-router-dom';


function NewAddNote() {
    
    
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [check,setCheck] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDesc] = useState("");
    const [isImportant,setIsImportant] = useState(false);
    const [uploadedBy , setUploadedBy] = useState("shaan")
    let navigate = useNavigate()
    

    const submitForm = (e) =>{
        e.preventDefault();
        let res = fetch("http://localhost:8000/addNote",{
          method: "POST",
          mode:"cors",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({
            title:title,
            description:description,
            content:content,
            isImportant:isImportant,
            uploadedBy:uploadedBy})
        }).then(response => response.json()).then(data=>{
          console.log(data);
          if(data.success){
            alert("Note Addedd Successfull");
            navigate("/");
          }else{
            alert("Error while adding note");
          }
        })
      }
      



    return (
        <>
            <Navbar />
            <div className="addNoteCon min-h-screen px-[50px]">
                <form onSubmit={submitForm} action="" className='my-5'>
                    <h3 className='m-0 p-0 text-2xl'>Create a New Note</h3>

                    <div className="inputBox !block !bg-transparent">
                        <label htmlFor="title">Enter a Note Title</label>
                        <input type="text"
                            onChange={(e)=>{setTitle(e.target.value)}}
                            value={title}
                            placeholder='Note Title'
                            className='w-full p-2 border border-grey-300 rounded-md mt-1'
                            style={{ border: "2px solid #555" }}
                            name='title'
                            id='title'
                            required
                        />
                    </div>

                    <div className="inputBox !block !bg-transparent">
                        <label htmlFor="title">Enter a Note Description</label>
                        <textarea type="text"
                            onChange={(e)=>{setDesc(e.target.value)}}
                            value={description}
                            placeholder='Note Desc..'
                            className='w-full p-2 border border-grey-300 rounded-md mt-1 min-h-[20px]'
                            style={{ border: "2px solid #555" }}
                            name='description'
                            id='description'
                            required
                        />
                    </div>

                    <CheckBox 
                    check={isImportant} setCheck={setIsImportant} title="Is important" />

                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onChange={newContent => { setContent(newContent) }}
                    />

                    <button className='btnNormal my-3 !min-w-[200px]' type='submit'>Submit</button>


                </form>
            </div>


        </>
    )
}

export default NewAddNote