import { useState } from 'react'
import './App.css'
import { FaCircleNotch } from 'react-icons/fa';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center w-[450px] mx-auto py-12 border shadow-md mt-5'>
        <div>
          <div className='flex items-center gap-1'>
            <h1 className='text-lg font-serif text-center'>Summary</h1>
            <FaCircleNotch />
          </div>
          <div className='w-[300px] border p-3'>
            <div className='flex justify-between gap-12'>
              <h1 className='pr-3'>Term</h1>
              <p>12 Months</p>
            </div>
            <div className='flex justify-between gap-12'>
              <h1>Selected Contracts</h1>
              <select className="">
                <option disabled selected>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className='flex justify-between py-2'>
            <p className='font-serif'>Slide to autoselect</p>
            <button className={`${count > 0 ? 'bg bg-cyan-700 p-1 rounded text-white' : 'bg bg-slate-700 p-1 rounded text-white'}`}>Reset</button>
          </div>

          <input type="range" min="0" max="80000" value={count} onChange={(e) => setCount(e.target.value)} className="range range-xs" />
          <p>$0.00 Selected Of $880000.00</p>
          <div className='flex justify-between py-1'>
            <p>Pay Back Amount </p>
            <p>${count}</p>
          </div>
          <div className='flex justify-between font-extralight'>
            <h3>Rate %</h3>
            <p>(0.00%) $ {count}</p>
          </div>
          <hr className='my-3 border-2' />
          <div className='flex justify-between '>
            <h1 className='font-bold font-serif'>Total Payable</h1>
            <p>${count}</p>
          </div>
          <button className={`${count > 0 ? 'btn btn-info w-full my-3' : 'btn btn-active w-full my-3'}`}>Review Your Credit</button>
        </div>
      </div>
    </>
  )
}

export default App
