import React,{ useState } from "react";
import Modal from "react-modal";


 export default function App(){
const[modalIsOpen,setModalIsOpen]=useState(false);
   const[data,setData]=useState(null);
//const[print,setPrint]=useState(false);

 function getData(val){
setData(val.target.value)
//setPrint(true)
console.log(val.target.value)
}
function openbutton(){
  setData("")
  setModalIsOpen(true)

}
function closebutton(){
  {
  
    //print?
    //setModalIsOpen(false)
   
    
    //: alert("'Please enter input' if it is empty.")
    //setPrint(false)

 // console.log(data);
    //(data === nul)?setModalIsOpen(true):setModalIsOpen(fals
if(data=="")
{
setModalIsOpen(true);
alert("hi");
}
else{
  setModalIsOpen(false)
}
//data==""?"hcf":"false"
  }
    
    
}


return (
  
    <div className='App'>
      <button onClick={openbutton}>open</button>
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





