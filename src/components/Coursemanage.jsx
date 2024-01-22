import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Coursemanage = () => {
    var [inputs,setInputs]
    =useState({"Cid":'',"Ctitle":'',"Category":'',"Description":''})
       const inputHandler=(e)=>{
       const {name,value}=e.target
       setInputs((inputs)=>({...inputs,[name]:value}))
       console.log(inputs)
       }
const addHandler=()=>{
    console.log("Clicked")

    console.log(inputs)
    axios.post("http://localhost:4000/cnew",inputs)

    .then((response)=>{
        alert("Record Saved")
    })
    .catch(err=>console.log(err))
}
  return (
    <div>
        <br/>
        <h3>Course Management Form</h3>
        <TextField id="outlined-basic" label="Course Id" variant="outlined" 
           name="Cid" value={inputs.Cid} 
            onChange={inputHandler}/><br/><br/>
        <TextField id="outlined-basic" label="Course Title" variant="outlined"
           name="Ctitle" value={inputs.Ctitle} 
           onChange={inputHandler} /><br/><br/>
        <TextField id="outlined-basic" label="Category" variant="outlined"
         name="Category" value={inputs.Category} 
         onChange={inputHandler} /><br/><br/>
        <TextField id="outlined-textarea" label="Description"
          placeholder="Placeholder"
          multiline
          name="Description" value={inputs.Description} 
          onChange={inputHandler}/><br/><br/>
         <Button variant="outlined" onClick={addHandler}>CREATE</Button><br/> 
    </div>
  )
}

export default Coursemanage