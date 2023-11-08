import React from 'react'
import "../style/count.css";
const Count = ({state,addFunc,subFunc,reset}) => {
  return (
    <div className="count">
      <h1>{state}</h1>
      <div>
        
        <button onClick={subFunc}>Sub</button>{" "}
        <button onClick={reset}>Reset</button>
        <button onClick={addFunc}>Add</button>
      </div>
    </div>
  );
}

export default Count
