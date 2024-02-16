import React from 'react'

export default function Form() {
    // const [FirstName ,seFirstName]=React.useState("")
    // // const lastName=firstName.value
    // // console.log(lastName)
    const [FormData ,setFormdata]=React.useState({
        firstName: "",
        lastName: "",
        comment:"",
        isFriendly:false,
        employment: "",
        favColor:""

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
    function submit(event){
        event.preventDefault()
        console.log(FormData)
    }

   
  return (
    <>
    <form onSubmit={submit}>
        <input type="text" placeholder="harshit " onChange={handlechange} name="firstName"  value={FormData.firstName}  />
        <br/>
        <input type="text" placeholder="VERMA " onChange={handlechange}  name="lastName"  value={FormData.lastName}/>
        <br/>
        <textarea value={FormData.comment} onChange={handlechange} name="comment" /><br/>
        <br/>
        <input type="checkbox" id="isFriendly" checked={FormData.isFriendly} onChange={handlechange} name="isFriendly"/>
        <label htmlFor="isFriendly">are you ready</label>
        <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={FormData.employment === "unemployed"}
                    onChange={handlechange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={FormData.employment === "part-time"}
                    onChange={handlechange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={FormData.employment === "full-time"}
                    onChange={handlechange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={FormData.favColor}
                onChange={handlechange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            <button>Submit</button>

    </form>
    </>
  )
}
