import React,{ useState } from "react";
import Modal from "react-modal";


 export default function App(){
const[modalIsOpen,setModalIsOpen]=useState(false);
const[data,setData]=useState(null);
const[print,setPrint]=useState(false);

 function getData(val){
setData(val.target.value)
setPrint(true)
console.log(val.target.value)
}
function closebutton(){
  {
    setData("")
    print?
    setModalIsOpen(false)
   
    
    : alert("hello")
    setPrint(false)
  }
    
    
}


return (
  
    <div className='App'>
      <button onClick={() => setModalIsOpen(true)}>open</button>
         <Modal isOpen={modalIsOpen}>
           <label>Input:</label>
            <input id="input" type="text" onChange={getData} autoFocus/>          
           <div>   
             <button onClick={closebutton}>close</button>
           </div>
         </Modal>     
    </div>

  )

}





