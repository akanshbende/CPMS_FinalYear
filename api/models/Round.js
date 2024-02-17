const mongoose=require("mongoose");
const { Schema } = mongoose;


const recruiterSchema = new Schema({
 companyId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter', required:true },
 jobPostId:{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' ,required:true},
 roundName:{type:String,required:true},
 roundNumber:{type:Number,required:true},
 shortlisted:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
 instruction:{type:String,default:""},
 isFinal:{type:Boolean,required:true,default:false}
},{ timestamps: true });

const Recruiter = mongoose.model('Recruiter', recruiterSchema)
module.exports = Recruiter; 

