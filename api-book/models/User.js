const mongoose=require('mongoose')
const timestamp=require("mongoose-timestamps")
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,default:''},
    mobileNo:{type:String ,default:'' },
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    status:{type:String,default:'Active',enum:['Active','Disabled']}, 
    userImage:{type:String, default:''} , 
    createdAt:Date,
    updatedAt:Date
})
UserSchema.plugin(timestamp,{index:true})
module.exports=mongoose.model('User',UserSchema)
