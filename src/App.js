import './App.css';

function App(){
  const title="Hi";
  let link="https://www.google.com/";
  return(
    <div className='cont'>
      <h1>{title}</h1> {/*value using var*/}
      <h2>{ "mehak"}</h2>{/*direct val*/}
      <a href={link}> Google</a>
    </div>
    
  );
}


export default App;
