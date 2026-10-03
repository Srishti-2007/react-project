import React from 'react'
import { useState } from 'react'

const Todo = () => {
  const[todo,setTodo]=useState("");
  const[listtodo,setListTodo]=useState([])
  const[editIndex,setEditIndex]=useState(null);
  return (
    <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]   '>
        <div className='addTodo my-5 flex flex-col '>
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input type="text" value={todo} onChange={(e)=>{
              setTodo(e.target.value)
            }}
             className='w-1/2 border-2 rounded-2xl pl-5 p-1 bg-white mt-3.5'  />

            <button  onClick={()=>
            {  
              if(todo.trim()===""){
                return
              }

              if(editIndex==null){
                  setListTodo([...listtodo,
                    {
                      text:todo,completed:false
                    }])
              }
              else{
                setListTodo(
                  listtodo.map((item,i)=>{
                    if(i==editIndex){
                      return {
                        ...item,
                        text:todo
                      }
                    }
                    return item
                  })
                )
                setEditIndex(null);
              }
              setTodo("")
            }}
            className='bg-violet-800 hover:bg-violet-950
            p-2 py-1 text-sm font-bold text-white mt-3.5 w-1/2 rounded-sm '>{editIndex==null? "Add" : "Save"}</button>

            <div className=' mt-4 flex justify-between w-1/2'>
            <h1 className='font-bold text-xl'>Yours Todo</h1>
            <button className=' text-sm font-bold text-white bg-violet-800
               p-1.5 rounded-sm ' 
               onClick={()=>setListTodo([])}>Clear All</button>
            </div>
            <ol className='mt-5'>
            { listtodo.map((item,index)=>(
              <li className='mt-1.5 flex justify-between w-1/2 ' key={index}>
                <div className='flex gap-4'>
                <input type="checkbox" 
                checked={item.completed}
                onChange={()=>{
                  setListTodo(
                    listtodo.map((item,i)=>{
                      if(i===index) {
                        return {...item,completed:!item.completed}
                      }
                      return item;
                    })
                  )
                }} />
                <span className={item.completed ? "line-through  text-gray-500": "" } >{item.text}</span>
                
                </div>
                <div className='flex gap-4'>
                <button className=' text-sm font-bold text-white bg-violet-800
               p-1.5 rounded-sm '
               onClick={()=> { setTodo(item.text)
                setEditIndex(index)}}>Edit</button>

              <button className=' text-sm font-bold text-white bg-violet-800
               p-1.5 rounded-sm '
               onClick={()=>{setListTodo(listtodo.filter((item,i)=>i!==index))}}>Delete</button>
               
                
               </div>
               </li>
            )) }
            </ol>
           
        </div>
    </div>
  )
}

export default Todo;