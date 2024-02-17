const mongoose=require("mongoose");
const { Schema } = mongoose;


const jobPostSchema = new Schema({
 description:{type:String,required:true},
 instruction:{type:String,default:""},
 criteria:{type:Object,required:true,default:{CGPA:7,backlog:0}}
},{ timestamps: true });

const JobPost = mongoose.model('JobPost', jobPostSchema)
module.exports = JobPost; 

