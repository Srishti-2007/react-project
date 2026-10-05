import React, { useState } from "react";

const ExpanseTracket = () => {
    const[name,setName]=useState("");
    const[amount,setAmount]=useState(0);
    const[category,setCategory]=useState("")
    const[list,setList]=useState([]);
    const[editindex,setEditIndex]=useState(null);
    const[expanse,setExpanse]=useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-xl mx-auto my-5 rounded-xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {" "}
          Expense Tracker
        </h1>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <label htmlFor="nameinput" className="font-semibold">
              Expense Name
            </label>
            <input
              type="text"
              id="nameinput"
              value={name}
              placeholder="Enter expense name"
              className="w-full border rounded-lg p-2"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="amountInput" className="font-semibold">
              Amount
            </label>
            <input
              type="number"
              id="amountInput"
              value={amount}
              placeholder="Enter amount"
              className="w-full border rounded-lg p-2"
              onChange={(e)=>setAmount(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
             <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select 
             id="category"
             value={category}
             onChange={(e) => {
              setCategory(e.target.value)
              }}
              defaultValue=""
             className="w-full border rounded-lg p-2 bg-white"
             >
                <option value="" disabled>Select Category</option>
                <option value="Food">Food</option>
                <option value="Study">Study</option>
                 <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>

             </select>
          </div>

          <button onClick={()=>{
            if(editindex==null){
               setList([...list,{
                text:name,
                money:amount,
                option:category
            }])
            }
            else{
              setList(list.map((item,index)=>{
                if(index===editindex){

                  return {
                    ...item,
                text:name,
                money:amount,
                option:category
                  }

                }
                return item;
              }))
              setEditIndex(null);
            }
            setName("")
            setAmount(0)
            setCategory("")
          }}
           className="bg-violet-700 hover:bg-violet-900 text-white 
           font-semibold rounded-lg p-2">{editindex==null? "Add Expanse" :"update expanse"}</button>
        </div>

          <div className="flex justify-between mt-5">
            <h1 className='font-bold text-xl'>Your Expanse</h1>
            <button 
             className="bg-violet-700 hover:bg-violet-900
                        text-white font-semibold rounded-lg p-1.5"
                        onClick={()=>setList([])}>Claer All</button>
          </div>
        <ol className="mt-5">
           {/* Heading */}
  <div className="flex font-bold border-b pb-2">
    <span className="w-1/3">Name</span>
    <span className="w-1/4">Amount</span>
    <span className="w-1/4">Category</span>
  </div>
            {list.map((item,index)=>{
                return(
                <li className="flex justify-between items-center mt-1 border-b py-2">

        <div className="flex w-full items-center">
          <span className="w-1/3">{item.text}</span>
          <span className="w-1/4">₹{item.money}</span>
          <span className="w-1/4">{item.option}</span>
        </div>
                    <div className="flex gap-3.5">
                      <button
                       className="bg-violet-700 hover:bg-violet-900
                        text-white font-semibold rounded-lg p-1"
                        onClick={()=>{
                          setName(item.text)
                          setAmount(item.money)
                          setCategory(item.option)
                          setEditIndex(index)
                        }
                        }>Edit</button>
                      <button
                       className="bg-violet-700 hover:bg-violet-900
                        text-white font-semibold rounded-lg p-1"
                        onClick={()=>setList(list.filter((item,i)=>i!=index))}>Delete</button>
                    </div>
                </li> )
            })}
        </ol>

          <div className="flex gap-5 items-center mt-3.5">
    <button
        className="bg-violet-700 hover:bg-violet-900
        text-white font-semibold rounded-lg p-1.5 "
        onClick={() => {
            const total = list.reduce((total, item) => {
                return total + Number(item.money);
            }, 0);

            setExpanse(total);
        }}
    >
        Total Expense
    </button>

    <span className="font-semibold text-xl">{expanse}</span>
</div>
      </div>
    </div>
  );
};

export default ExpanseTracket;
