var express=require('express');
var app=express();
let  {connectDB}= require("./mongoose.js");

let {jobschema,Jobposts}=require("./models/jobschemacoll.js");
connectDB();
app.get("/getData",async(req,res)=>{
    let c=await Jobposts.find();
    console.log(c);
res.send(c);

})
app.listen(7009,()=>{
    console.log("connected to port");
})
