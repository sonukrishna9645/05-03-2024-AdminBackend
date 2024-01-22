import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'react'

const Adminlogin = () => {

  var [inputs,setInputs]
  =useState({"Email":'',"Pass":''})

         const inputHandler=(e)=>{
          const {name,value}=e.target
          setInputs((inputs)=>({...inputs,[name]:value}))
          console.log(inputs)
         }
      const addHandler=()=>{
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
        <h3>LOGIN</h3>
        <TextField id="outlined-basic" label="Email Id" variant="outlined" 
           name="Email" value={inputs.Email} 
              onChange={inputHandler}/><br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password'
            name="Pass" value={inputs.Pass} 
              onChange={inputHandler} /><br/><br/>
        <Button variant="outlined"><Link to='/Admindash'>LOGIN</Link> </Button><br/>
    </div>
  )
}

export default Adminlogin