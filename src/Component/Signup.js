import React from 'react'

export default function Signup() {
    const [formData,setFormdata]=React.useState({
        email:"",
        password:"",
        password1:"",
        isFriendly:false


    })
    
    function handlechange(event){
        const {name,value,type,checked}=event.target
        setFormdata((preventData)=>{
            return{
                ...preventData,
                [name]:type==="checkbox"?checked:value
                
            }
        })

    }
    function submit(event){
        event.preventDefault()
        if(formData.password===formData.password1){
            console.log("succesful")
            if(formData.isFriendly){
                console.log("thanks for joining news letter")
            }
        }
        else{
            console.log("password does not match")
        }
        // console.log("hii")
        // console.log(formData)
    }
    
  return (
    <form onSubmit={submit}>
        <input type="email" placeholder="email" onChange={handlechange} name="email"  value={formData.email}  />
        <br/>
        <br/>
        <input type="password" placeholder="password" onChange={handlechange}  name="password"  value={formData.password}/>
        <br/>
        <input type="password" placeholder="password" onChange={handlechange}  name="password1"  value={formData.password1}/>
        <br/>
        <input type="checkbox" id="isFriendly" checked={formData.isFriendly} onChange={handlechange} name="isFriendly"/>
        <label htmlFor="isFriendly">I want join news letter</label>
        <br/>
        <button>Sign Up</button>

    </form>
  )
}
