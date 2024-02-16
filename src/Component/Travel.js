import React from 'react'


export default function  Travel(props) {
  return (
    <>
    <div className='harshit'>
        <div className='verma'><img src={props.image}></img>
        </div>
        <div className='sach'>
            <p>{props.location}+{props.link}</p>
            <h1>{props.title}</h1>
            <h5>{props.startdate}-{props.enddate}</h5>
            <p>{props.description}</p>
        </div>
    </div>
    </>
    
  )
}


const  travel=Array.map(items =>{
  return(
    <Travel
    image={items.image}
    location={items.location}
    title={items.title}
    startdate={items.startdate}
    enddate={items.enddate}
    description={items.description}
     
     />
     
  )

})