import React,{useState} from 'react';



function CompA() {
const[name, setName] = useState("Pawan")

const click=() => {
    setName("Singh")
}
  return (
    <div>
    <h1> My name is {name}</h1>
    <button onClick={click}>Click here</button>
    </div>
  )
}

export default CompA;