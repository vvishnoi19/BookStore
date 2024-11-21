const Book=require('../models/Book');
async function addBook(req,res)
{
    try{
       console.log(req.body,'req.body')
       console.log('---------------------------------------------')
       console.log(req.file,'req.file');
        let book=await new Book(req.body);
        await book.save();
        res.status(200).send({success:true,message:"Data submitted successfully"});
}
catch(err)
{
    console.log(err);
    res.status(400).send({success:false,message:"Something went wrong...."})
}
}
async function getBooks(req,res)
{
    try{
        // let books=await Book.find({});
        let books=await Book.find({bookName:new RegExp(req.query.search,"i")})
        res.status(200).send({success:true,data:books})

    }
    catch(err)
    {
        console.log(err)
    }
}
async function getBook(req,res)
{
    try{
        let id=req.params.id
        let book=await Book.findOne({_id:id});
        res.status(200).send({success:true,data:book})
    }
    catch(err)
    {
        console.log(err)    
    }
}
async function editBook(req,res)
{
    try{
        let id=req.params.id
        let book=await Book.findOne({_id:id});
        book.bookName=req.body.bookName;
        book.authorName=req.body.authorName;
        book.description=req.body.description;
        book.price=req.body.price;
        book.publisher=req.body.publisher;
        book.isbnNo=req.body.isbnNo;
        await book.save();
        res.status(200).send({success:true,message:'data is updated'})
    }
    catch(err)
    {
        console.log(err)    
      
    }
}
async function deleteBook(req,res)
{
    try{
        let id=req.params.id
        await Book.deleteOne({_id:id});
        res.status(200).send({success:true,message:'data is updated'})
    }
    catch(err)
    {
        console.log(err.message)    
        res.status(400).send({success:false})
      
    }
}

module.exports={
    addBook,getBooks,getBook,editBook,deleteBook
}