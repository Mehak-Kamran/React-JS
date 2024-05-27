// function Home(){
//     const handleClick=(e)=>{
//         console.log("Hello",e.target)
// }
// const handleClickButton2=(name,e)=>{
//     console.log(name+" "+"You clicked me again",e);
// }
//     return(
//         <div className="home">
//             <h1>Home</h1>
//             <button onClick={handleClick}>Click Me!</button>
//             <button onClick={(e)=>{handleClickButton2("mak",e)}}>Click Me too!</button>
//         </div>

//     )
// }
import {useState} from 'react'

function Home(){
    const [name,setName]=useState("hafsa adil")

    const handle=()=>{
      setName("hafsa sajid")
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handle}>After Marriage</button>
            <p>Hi her name is {name} </p>
        </div>
    )

}

export default Home;