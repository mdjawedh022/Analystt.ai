
import { useEffect, useState } from 'react';
import './App.css';
import Count from './components/Count';

function App() {
  const[state,setState]=useState(0);
  useEffect(() => {
  console.log("Component mounted");
  
  }, [setState]);
const addFunc=()=>{
  setState(state+1)
  console.log("Component updated")
}
const subFunc=()=>{
if(state>0){
  setState(state-1)
  console.log("Component updated");
}else if(state===0){
  alert("value should be zero you can't decrese value!")
}
}

const resetFunc=()=>{
  console.log("Component updated");
   setState(0)
}

  return (
    <div className="App">
     <Count  state={state} addFunc={addFunc} subFunc={subFunc} reset={resetFunc}/>
    </div>
  );
}

export default App;
