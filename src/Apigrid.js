import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
// import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Apigrid = () => {
//    const rowData = [
//        {make: "Toyota", model: "Celica", price: 35000},
//        {make: "Ford", model: "Mondeo", price: 32000},
//        {make: "Porsche", model: "Boxter", price: 72000}
//    ];

 

//    axios.get(` https://www.ag-grid.com/example-assets/row-data.json`)
//    .then(res => {
//      const persons = res.data;
//      this.setState({ persons });
//    })

//    const onGridReady=(params)=>{
//     console.log("grid is ready");
//     axios.get(`https://www.ag-grid.com/example-assets/row-data.json`)
//     .then(resp=>{console.log(resp)
//       params.api.applyTransaction({add:resp})})
//   }



const onGridReady=(params)=>{
    console.log("grid is ready")
    fetch(`https://www.ag-grid.com/example-assets/row-data.json`).then(resp=>resp.json())
    .then(resp=>{console.log(resp)
      params.api.applyTransaction({add:resp})})
  }
//https://www.youtube.com/watch?v=lQ8HwF9cwvs&list=PLqhnP4YYLcb4X3AgmW699wyAhoP2SYf5j&index=6
// youtube reference

   return (
       <center><div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
            //    rowData={persons}
               onGridReady={onGridReady}
               pagination={true}
               paginationPageSize={7}>

               <AgGridColumn field="make" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
           </AgGridReact>
       </div>
       </center>
   );
};

export default Apigrid;