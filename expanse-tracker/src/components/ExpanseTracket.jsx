import React, { useState } from "react";

const ExpanseTracket = () => {
    const[name,setName]=useState("");
    const[amount,setAmount]=useState(0);
    const[category,setCategory]=useState("")
    const[list,setList]=useState([]);

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
            setList([...list,{
                text:name,
                money:amount,
                option:category
            }])
            setName("")
            setAmount(0)
            setCategory("")
          }}
           className="bg-violet-700 hover:bg-violet-900 text-white font-semibold rounded-lg p-2">Add Expanse</button>
        </div>

        <ol>
            {list.map((item,index)=>{
                return(
                <li>
                    <div>
                        <span>{item.text}</span>
                        <span>{item.money}</span>
                        <span>{item.option}</span>
                    </div>
                </li> )
            })}
        </ol>
      </div>
    </div>
  );
};

export default ExpanseTracket;
