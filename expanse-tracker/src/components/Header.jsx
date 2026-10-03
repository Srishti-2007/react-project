import React from 'react'

const Header = () => {
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
              placeholder="Enter expense name"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="amountInput" className="font-semibold">
              Amount
            </label>
            <input
              type="number"
              id="amountInput"
              placeholder="Enter amount"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
             <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select 
             id="category"
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

          <button className="bg-violet-700 hover:bg-violet-900 text-white font-semibold rounded-lg p-2">Add Expanse</button>
        </div>
      </div>
    </div>
  )
}

export default Header