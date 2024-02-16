import React from 'react'

export default function Form() {
    // const [FirstName ,seFirstName]=React.useState("")
    // // const lastName=firstName.value
    // // console.log(lastName)
    const [FormData ,setFormdata]=React.useState({
        firstName: "",
        lastName: "",
        comment:"",
        isFriendly:false

     })
    // console.log(FormData)


    function handlechange(event){
        const {name,value,type,checked}=event.target
        setFormdata(preventData=>{
            return{
                ...preventData ,
                [name]: type === "checkbox" ? checked:value
            }
            
        })
        
        
    }

   
  return (
    <>
    <form>
        <input type="text" placeholder="harshit " onChange={handlechange} name="firstName"  value={FormData.firstName}  />
        <input type="text" placeholder="VERMA " onChange={handlechange}  name="lastName"  value={FormData.lastName}/>
        <textarea value={FormData.comment} onChange={handlechange} name="comment" /><br/>
        <input type="checkbox" id="isFriendly" checked={FormData.isFriendly} onChange={handlechange} name="isFriendly"/>
        <label htmlFor="isFriendly">are you ready</label>

    </form>
    </>
  )
}
