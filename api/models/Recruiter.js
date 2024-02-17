const mongoose=require("mongoose");
const { Schema } = mongoose;


const recruiterSchema = new Schema({
 
  companyName:{type:String,required:true},
  firstName:{type:String,required:true}, // type:sring
  lastName:{type:String,required:true}, // type:string
  emailID:{type:String,required:true}, // type:email
  password:{type:String,required:true},
  jobPost:[{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' }],// [array],
  // shortlistedStudents: ["student1"],
  verified: {type:Boolean,required:true} // type:boolean (if rejected then send email about issues and register with correct data) // type:boolean

},{ timestamps: true });

const Recruiter = mongoose.model('Recruiter', recruiterSchema)
module.exports = Recruiter; 

