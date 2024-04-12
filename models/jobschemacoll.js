var mongoose=require("mongoose")
const jobschema=new mongoose.Schema({
    companyname:{type:String,required:true
    },
    jobname:{type:String,
        required:true},

 totalapplications: {type:Number,
        required:false},
  openings:{type:Number,
  required:false},
  lastdate: {
    type: Date, 
    required: false},
 description:{
    type:String,
    required:false
 },
 logo:{
    data:Buffer,
    contentType:String

},
employeremail:{
  type:String,
  required:false,

}

  })
  var  Jobposts=mongoose.model("iobposts",jobschema);
  
module.exports={jobschema,Jobposts};