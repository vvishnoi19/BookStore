const express=require("express");
const bookcontroller=require('../controllers/bookcontroller');
const multer=require('multer');

const bodyParser=require("body-parser");
const router=express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended:false
}));
const uploader=multer({
    storage:multer.diskStorage({}),
    limits:{fileSize:10*1024*1024}
})
router.post('/add/book',uploader.single('file'),(req,res)=>{
    bookcontroller.addBook(req,res);
});

router.get('/books',(req,res)=>{
    bookcontroller.getBooks(req,res);
});
router.get('/book/:id',(req,res)=>{
    bookcontroller.getBook(req,res);
});
router.get('/view/book/:id',(req,res)=>{
    bookcontroller.viewBook(req,res);
})
router.put('/edit/book/:id',(req,res)=>{
    bookcontroller.editBook(req,res);
});
router.delete('/delete/book/:id',(req,res)=>{
    bookcontroller.deleteBook(req,res);
});


module.exports=router; 
