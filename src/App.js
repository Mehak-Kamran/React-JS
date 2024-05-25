import Navbar from "./nav"
import Home from "./home"
import './App.css';


function App(){
  return(
    <div className="content">
        <Navbar/>

        <div className="content">
            <Home/>
        </div>

    </div>
    
    
         
  );
}


export default App;
