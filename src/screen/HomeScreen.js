import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';

export default function HomeScreen() {

   const [rowData] = useState([
       { '#': 1, name: "Coin", price: "Celica", '7d%': 35000, 'market cap': 20, 'volume (24hr)': 20, 'tweets (24hr)': 20, 'Tweets last 7 days': 30, 'Price last 7 days': 100 }
   ]);

   const [columnDefs] = useState([
       { field: '#', width: 120 },
       { field: 'name', width: 120 },
       { field: 'price', width: 120 },
       { field: '7d%', width: 120 },
       { field: 'market cap', width: 120 },
       { field: 'volume (24hr)', width: 150 },
       { field: 'tweets (24hr)', width: 150 },
       { field: 'Tweets last 7 days', width: 150 },
       { field: 'Price last 7 days', width: 150 },
   ])

  return (
       <div className="ag-theme-alpine" style={{height: 400, width: 1400, margin: '0 auto'}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
  );
}