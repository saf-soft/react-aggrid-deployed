

import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
//import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Countrygrid = () => {



const onGridReady=(params)=>{
    console.log("grid is ready")
    fetch(`https://restcountries.eu/rest/v2/all`).then(resp=>resp.json())
    .then(resp=>{console.log(resp)
      params.api.applyTransaction({add:resp})})
  }
//https://www.youtube.com/watch?v=lQ8HwF9cwvs&list=PLqhnP4YYLcb4X3AgmW699wyAhoP2SYf5j&index=6
// youtube reference

   return (
       <center><div className="ag-theme-alpine" style={{height: 400, width: 1050}}>
           <AgGridReact
            //    rowData={persons}
               onGridReady={onGridReady}
               pagination={true}
               paginationPageSize={7}>
               <AgGridColumn field = "cioc" headerName="Code" width="300" resizable={true} sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="name"  width="300"  sortable={true} resizable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="capital"  width="300"  sortable={true} resizable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="population"  width="300"  sortable={true} resizable={true} filter={true}></AgGridColumn>
               
               
               <AgGridColumn field="flag"  width="300" sortable={true} resizable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="region" width="300" sortable={true} resizable={true} filter={true}></AgGridColumn>
               <AgGridColumn headerName="Internet Domain" field="topLevelDomain" resizable={true} sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="translations.fa" headerName="Arabic" resizable={true}  sortable={true} filter={true}></AgGridColumn>
       <AgGridColumn field="nativeName" headerName="NativeName" resizable={true}  sortable={true} filter={true}></AgGridColumn>
       <AgGridColumn field="numericCode" headerName="NumericCode" resizable={true}  sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="callingCodes" headerName="CallingCodes" resizable={true}  sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="timezones" headerName="TimeZone" resizable={true}  sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="borders" headerName="Borders" resizable={true} sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="altSpellings" headerName="Spelling" resizable={true} sortable={true} filter={true}></AgGridColumn>
               
           </AgGridReact>
       </div>
       </center>
   );
};

export default Countrygrid;
