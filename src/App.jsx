import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [selected,setSelected]=useState(null);
  const [enableMultiSelection,setEnableMultiSelection]=useState(false);
  const [multiple,setMultiple]=useState([]);

  const handleSingleSelection=(id)=>{
    setSelected(id===selected?null:id);
  }
  const handleMultiSelection=(id)=>{
    let cpyMultiple=[...multiple];
    const findIndexOfCurrentId=cpyMultiple.indexOf(id);
    if(findIndexOfCurrentId===-1){
      cpyMultiple.push(id);
    }else{
      cpyMultiple.splice(findIndexOfCurrentId,1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className='w-full mx-auto flex flex-col items-center'>
      <button onClick={()=>setEnableMultiSelection((prevState)=>!prevState)}
       className='bg-purple-600 text-white text-xl p-2 mt-5 rounded-md'>Enable MultiSelection</button>
      <div className='flex flex-col mx-auto text-center text-2xl gap-5 mt-24'>
        {
          data && data.length>0?(
            data.map((item)=><div key={item.id} className='p-2 flex flex-col items-center w-[500px] bg-emerald-300 mx-auto cursor-pointer' 
            onClick={enableMultiSelection? ()=>handleMultiSelection(item.id) :()=>handleSingleSelection(item.id)}>
              <div className='w-full flex justify-between'>
              <div className='font-bold'>{item.question}</div>
              <div>+</div>
              </div>
              {
                enableMultiSelection?
                multiple.indexOf(item.id)!==-1 && <div>{item.answer}</div>:
                selected===item.id && <div>{item.answer}</div>
              }
              {/* {
              selected===item.id?<div>{item.answer}</div>:null
              } */}
            </div>
            
            )
            
          )
          :null
        }
      </div>
    </div>
  )
}

export default App
