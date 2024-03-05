import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'

const Coursetype = () => {

    var [inputs,setInputs]
    =useState({"name":'',})
       const inputhandler=(e)=>{
       const {name,value}=e.target
       setInputs((inputs)=>({...inputs,[name]:value}))
       console.log(inputs)
       }

  return (
    <div>
        <br/>
        <TextField id="outlined-basic" label="Name" variant="outlined" 
           name="Cid" value={inputs.Cid} 
            onChange={inputhandler}/><br/><br/>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Term</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="3 months" control={<Radio />} label="3 Months" />
        <FormControlLabel value="6 months" control={<Radio />} label="6 Months" />
        </RadioGroup>
    </FormControl> 
    <select name="Status" value={inputs.Status}  onChange={inputhandler}>
         <option value="ACTIVE">ACTIVE</option>
         <option value="INACTIVE">INACTIVE</option>
        </select>
        <br/><br/>
    </div>
  )
}

export default Coursetype