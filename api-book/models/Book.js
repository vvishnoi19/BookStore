const mongoose=require('mongoose')
const timestamp=require("mongoose-timestamps")
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    bookName:{type:String},
    authorName:{type:String},
    shortDescription:{type:String},
    longDescription:{type:String},
    language:{type:String},
    price:{type:Number}, 
    quantity:{type:Number}, 
    condition:{type:String}, 
    bookStatus:{type:String}, 
    publisher:{type:String},
    isbnNo:{type:String},
    bookImage:{type:String},
    createdAt:Date,
    updatedAt:Date
})
BookSchema.plugin(timestamp,{index:true})
module.exports=mongoose.model('Book',BookSchema)
