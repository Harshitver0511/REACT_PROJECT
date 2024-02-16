import React from 'react'

export default function Count() {
    const [count,SetCount]=React.useState(0);
    console.log(count);
    function add(){
        SetCount((prevcount)=>
                prevcount=prevcount+1
           
        )
    }
    function sub(){
        SetCount((prevcount)=>
                 prevcount=prevcount-1
        )   
    }
  return (
    <>
   
    <div className='but1'><button onClick={add}>Incr</button></div>
    <div className='but1'><button>{count}</button></div>
    <div className='but1'><button onClick={sub} >Decre</button></div>
    </>
  )
}
