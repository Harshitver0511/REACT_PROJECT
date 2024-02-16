import React from 'react';
import './App.css';
import Boxes from './Component/Boxarr';
import Box from './Component/Box';


 function App() {
  const [squares, setSquares] = React.useState(Boxes)
  function toggle(id){
    setSquares(prevsqar=>{
      return prevsqar.map((square)=>{
        return square.id === id ? {...square, on: !square.on} : square

      })
    })
  }
  const boxes=squares.map(rr =>{
    return(
      <Box key={rr.id}

      hii={rr.on} 
      handlech={()=>toggle(rr.id)} />
     
    )
  })
  
 
  return (
   <>
   {boxes}
   
   
   </>
  );
}

export default App;
