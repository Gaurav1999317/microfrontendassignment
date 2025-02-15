import React from "react";

const App=()=>{
  return(
      <div style={{ 
          border: '1px solid #ccc', 
          padding: '20px', 
          margin: '150px',
          borderRadius: '4px'
        }}>
          <h2>Email Application</h2>
          <div style={{ marginTop: '10px' }}>
           <button onClick={()=>{console.log("Email button clicked")}}>Email Button</button> 
          </div>
          <div style={{ marginTop: '10px' }}>
            Status: Running on port 3000
          </div>
        </div>
  )
}
export default App
