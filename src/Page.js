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

export default page