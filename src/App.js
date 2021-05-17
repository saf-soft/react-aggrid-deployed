
import './App.css';
import Apigrid from './Apigrid';
import Countrygrid from './Countrygrid';

function App() {
  return (
    <div>
    <div align="center" style={{color:"#f7df1e",font:"9",fontWeight:"bold"}}>React App</div>
    <br></br>
    <div align="center" style={{color:"red",font:"7",fontWeight:"bold"}}>This is data is fetched from aggrid website</div>
    <br></br>
   <Apigrid></Apigrid>
   <br></br>
   <div align="center" style={{color:"red",font:"7",fontWeight:"bold"}}>This is data is fetched from country rest API</div>
   <br></br>
   <Countrygrid></Countrygrid>
    <br></br>
    <div align="center" style={{color:"cornflowerblue",font:"5",fontWeight:"bold"}}>Developed by Safwan Mannambath</div>
    </div>
  );
}

export default App;
