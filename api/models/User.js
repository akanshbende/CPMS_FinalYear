const mongoose=require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:{type:String,required:true}, // type:sring
  lastName:{type:String,required:true}, // type:string
  collegeID:{type:String,required:true}, // type:email
  password:{type:String,required:true},
  role:{type:String,required:true,enum: [ROLE.STUDENT,ROLE.COORDINATOR,ROLE.ADMIN]},
  branch:{type:String,required:true}, //dropdown // type:string
  rollNo:{type:String,required:true}, // type:string
  mobileNo:{type:String,required:true}, // type:number
  current_CGPA:{type:Number,required:true}, // type:number(float)
  isBacklog: {type:Boolean,required:true}, // type:boolean
  backlogs: {type:Number,required:true}, // type:number
  dob:{type:String,required:true}, // type:date
  motherName:{type:String,required:true}, // type:string
  fatherName:{type:String,required:true}, // type:string
  companyApplied:{type:[String],required:true},
  companyPlaced:{type:[String],required:true},
  photo:{type:String,required:true}, // type:string (has to store in cloud)
  x_Marksheet:{type:String,required:true}, // type:string (has to store in cloud)
  xii_Marksheet:{type:String,required:true}, // type:string (has to store in cloud)
  BE_Marksheets:{type:String,required:true}, // type:string (has to store in cloud)
  verified:{type:Boolean,required:true}, // type:boolean (if rejected then send email about issues and rerejester with correct data)
  blocked: {
    byCompany:{type:Boolean,default:false},
    byTNP:{type:Boolean,default:false}
  }, // type:boolean
},{ timestamps: true });

const User = mongoose.model('User', userSchema)
module.exports = User; 

