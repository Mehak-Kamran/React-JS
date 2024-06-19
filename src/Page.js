"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
const page=()=>{

  let name="ami"
  const [editor,seteditor]=useState("mark")
  const[marks,setMarks]=useState(50)
  return <>
       
          <Header name={name} editor={editor}/>
          <div>
            <h1>My marks are {marks}</h1>
            <button onClick={()=>{
              setMarks(90)
            }}>Update marks</button>
          </div>
          <Footer/>
  
         </>
}
//two way binding
"use client"
import React from "react";
import { useState } from "react";


let page=()=>{
const [name,setname]=useState("");
  return <>
     <form>
      <h1 className="font-bold text-center">Form</h1>
      <input value={name} onChange={(e)=>{
        setname(e.target.value)
        console.log(e.target.value)

      }}
      type="text" placeholder="Enter your name" className="border-2 border-slate-200"></input>
     </form>
      </>
}

export default page

export default page
