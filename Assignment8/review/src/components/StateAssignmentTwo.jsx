import { useState } from "react";

function StateAssignmentTwo() {
  const[no,setno]=useState([]);

  function random(){
    
    setno([...no,Math.floor(Math.random()*10)]);
  }
    return(
    <section >
        <button onClick={random}>Click me!</button>
        {no.map((e)=>{
            return <li>{e}</li>
        })}
    </section>
    );
}
export default StateAssignmentTwo;