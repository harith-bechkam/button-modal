import React,{ useState } from "react";
import Modal from "react-modal";


 export default function App(){
const[modalIsOpen,setModalIsOpen]=useState(false)
const[data,setData]=useState(null)

 function getData(val){
setData(val.target.value)
//here iam printing for confirming data is passed or not
console.log(val.target.value)
}

return (
  
    <div className='App'>
      <button onClick={() => setModalIsOpen(true)}>open</button>
         <Modal isOpen={modalIsOpen}>
           <label>Input:</label>
            <input id="input" type="text" onChange={getData} autofocus/>          
           <div> 
           {
             {data}.length!=0?<p>{data}</p>:<button onClick={() => setModalIsOpen(false)}>close</button>
           }  
             <button onClick={() => setModalIsOpen(false)}>close</button>
           </div>
         </Modal>     
    </div>

  )

}





