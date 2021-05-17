
import './App.css';
import Apigrid from './Apigrid';
import Countrygrid from './Countrygrid';

function App() {
  return (
    <div>
    <div align="center" style={{color:"#f7df1e",fontSize:25,fontWeight:"bold"}}>React App</div>
    <br></br>
     <br></br>
    <!--<div align="center" style={{color:"red",font:"7",fontWeight:"bold"}}>This is data is fetched from aggrid website</div>-->
    <br></br>
    <div align="center" style={{color:"#651e3e",font:"7",fontWeight:"bold"}}>Automobile ShowRoom</div>
    <br></br>
   <Apigrid></Apigrid>
   <br></br>
   //<div align="center" style={{color:"#ff6f69",font:"7",fontWeight:"bold"}}>This is data is fetched from country rest API</div>
   <br></br>
       <div align="center" style={{color:"#ff3377",font:"7",fontWeight:"bold"}}>Country Lists</div>
    <br></br>
   <Countrygrid></Countrygrid>
    <br></br>
    <hr></hr>
    <div align="center" style={{color:"#4b3832",font:"5",fontWeight:"bold"}}>Developed by - Safwan Mannambath</div>
     <br></br>
     <br></br>
     <br></br>
    .
    </div>
  );
}

export default App;
