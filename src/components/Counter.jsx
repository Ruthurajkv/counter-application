import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementByAmount, decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'


function Counter() {
    const [amount,setAmount] = useState("")
    const dispatch= useDispatch()
    const count= useSelector((state)=>state.counter.count)
    const handleIncrement =()=>
    {
        if(amount==''){
            alert('please provide amount')
        }else{
            //define the reducer method
            dispatch(incrementByAmount(Number(amount)))
            
           
        }
    }
    const handleDecrement =()=>
    {
        if(amount==''){
            alert('please provide amount')
        }else{
            //define the reducer method
          
            dispatch(DecrementByAmount(Number(amount)))
        }
    }
  return (
    <div style={{backgroundColor:'grey',height:"70vh"}} className='w-100  d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center border rounded p-5  flex-column'>
            <h1 className='fs-1'>{count}</h1>
            <div className='d-flex justify-content-between w-100'>
                <button onClick={()=>dispatch(decrement())}className="btn btn-warning">Decrement</button>
                <button onClick={()=>dispatch(reset())}className="btn btn-danger">Reset</button>
                <button onClick={()=>dispatch(increment())}className="btn btn-success">Increment</button>
                </div>
               <div className="d-flex mt-5 justify-content-between ">
                <input  onChange={e=>setAmount(e.target.value) } type="text" className="form-control" placeholder='enter a number to increment' />
                <button onClick={handleIncrement}className="btn btn-primary ms-1">Increment by amount</button>
                <button onClick={handleDecrement}className="btn btn-primary ms-1">Decrement by amount</button>
               </div>
            </div>
        </div>
       


  )           
}

export default Counter