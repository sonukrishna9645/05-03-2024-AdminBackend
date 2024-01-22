import { Button, Menu, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'react'
const Admind = () => {

  var [inputs,setInputs]
  =useState({"Admid":'',"Fn":'',"Ln":'',"Emid":'',"Passw":''})
      const inputHandler=(e)=>{
        const {name,value}=e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
      }
      const addHandler =() =>{
        console.log("Clicked")

        console.log(inputs)
        axios.post("http://localhost:3005/new",inputs)
        .then((response)=>{
          alert("Record Saved")
        })
         .catch(err=>console.log(err))
      }
  return (
    <div>
        <h1>ADMIN</h1>
        
        <TextField id="outlined-basic" label="Admin Id" variant="outlined" 
        name="Admid" value={inputs.Admid} onChange={inputHandler} /><br/>
        <TextField id="outlined-basic" label="First Name" variant="outlined" 
         name="Fn" value={inputs.Fn} onChange={inputHandler}/><br/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" 
         name="Ln" value={inputs.Ln} onChange={inputHandler}/><br/>
        <TextField id="outlined-basic" label="Email Id" variant="outlined" 
         name="Emid" value={inputs.Emid} onChange={inputHandler}/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password'
         name="Passw" value={inputs.Passw} onChange={inputHandler} /><br/><br/>
        <Button variant="outlined" onClick={addHandler}><Link to='/Admindash'>SIGN UP</Link> </Button><br/>
        
    </div>
  )
}

export default Admind