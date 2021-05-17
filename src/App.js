import logo from './logo.svg';
import './App.css';
import Apigrid from './Apigrid';
import Countrygrid from './Countrygrid';

function App() {
  return (
    <div>
    <center>React App</center>
    <br></br>
    <div align="center" style={{color:"red",font:"7",fontWeight:"bold"}}>This is data is fetched from aggrid website</div>
    <br></br>
   <Apigrid></Apigrid>
   <br></br>
   <div align="center" style={{color:"red",font:"7",fontWeight:"bold"}}>This is data is fetched from country rest API</div>
   <br></br>
   <Countrygrid></Countrygrid>
    </div>
  );
}

export default App;
