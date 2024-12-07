const User=require('../models/User')
async function addUser(req,res) 
{
    try{
       let user=await User.findOne({email:req.body.email})
       if(user)
       {
        res.status(400).send({success:false,message:"user already exist"})
       }
       else{
        user=new User(req.body);
        await user.save();
        res.status(200).send({success:true,message:"Data submitted successfully"});
       }
      
    }
    catch(err){
        console.log(err)
        res.status(400).send({success:false,message:err.message});
    }
}
async function getUsers(req,res) 
{
    try{
        let users=await User.find({})
        console.log(users)
        res.status(200).send({success:true,data:users});
    }
    catch(err){
        console.log(err)
        res.status(400).send({success:false,message:err.message});
    }
}
module.exports={
    addUser,getUsers
}
