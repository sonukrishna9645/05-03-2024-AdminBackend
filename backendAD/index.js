const express=require("express")
const cors=require("cors")

const app=new express();

const coursemodel=require('./model/coursemanage');


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


app.get('/',(request,response)=>{
    response.send("hai")
})

//for create button
app.post('/cnew',(request,response)=>{
    console.log("jdsasd")
    new coursemodel(request.body).save();
    response.send("Record Sucessfully Saved")
})

app.listen(4000,(request,response)=>{
    console.log("Port is running in 4000")
})
