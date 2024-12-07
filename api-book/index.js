const express=require('express');
const connection=require('./connection');
const cors=require('cors');
const book=require('./routes/book')  
const user=require('./routes/user')
const app=express();
app.use(cors());
connection();
app.use(book)
app.use(user)
app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("server is running on port 3000.....")
    }
})