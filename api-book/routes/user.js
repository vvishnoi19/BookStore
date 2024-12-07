const express=require('express');
const usercontroller=require('../controllers/usercontroller')
const router=express.Router();
router.post('/add/user',(req,res)=>{

    usercontroller.addUser(req,res);
})
router.get('/users',(req,res)=>{
    console.log("we are in get user router")
    usercontroller.getUsers(req,res);
})
module.exports=router