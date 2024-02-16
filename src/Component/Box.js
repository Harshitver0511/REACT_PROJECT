import React from 'react'
import './App1.css';


export default function Box(props) {
 

    const styles= {
        backgroundColor:props.hii? "#222222" : "red"
    }
     
  
  return (
    <>
    <div style={styles} onClick={props.handlech} className="box">
    
       
    </div>
    </>
    
  )
}
