const mongoose=require('mongoose')
const timestamp=require("mongoose-timestamps")
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    bookName:{type:String},
    authorName:{type:String},
    description:{type:String},
    price:{type:Number}, 
    publisher:{type:String},
    isbnNo:{type:String},
    bookImage:{type:String},
    createdAt:Date,
    updatedAt:Date
})
BookSchema.plugin(timestamp,{index:true})
module.exports=mongoose.model('Book',BookSchema)