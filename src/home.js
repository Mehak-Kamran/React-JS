function Home(){
    const handleClick=(e)=>{
        console.log("Hello",e.target)
}
const handleClickButton2=(name,e)=>{
    console.log(name+" "+"You clicked me again",e);
}
    return(
        <div className="home">
            <h1>Home</h1>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={(e)=>{handleClickButton2("mak",e)}}>Click Me too!</button>
        </div>

    )
}

export default Home;