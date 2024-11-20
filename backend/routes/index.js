var express = require('express');
var router = express.Router();
var User = require("../Models/userModel.js")

let secret = "mysecretcode";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', async (req, res) => {
  let { username, name, email, password } = req.body;

  let emailCon = await User.findOne({ email });
  if (emailCon) {
    return res.json({
      message: "Email already exists"
    })
  }
  else {
    var bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt,async function (err, hash) {
        let user = await User.create({
          username,
          name,
          email,
          password: hash
        });

        const jwt = require('jsonwebtoken') 
        let token = jwt.sign({userId:user._id,email:user.email},secret);

        res.json({
          success:true,
          userId:user._id,
          message:"User Created Successfully",
          token : token
        })

      });
    });
  }

})


router.post('/login',async(req,res)=>{
  let {email,password}=req.body;
  let user = await User.findOne({email});

  if(user){
    var bcrypt = require('bcryptjs');
    bcrypt.compare(password,user.password,async function (err,result){
      if(result){
        const jwt = require('jsonwebtoken')
        var token = jwt.sign({email:user.email,userId : user._id},secret)
        res.json({
          success:true,
          userId:user._id,
          message:"User Logged In Successfully",
          token:token
        })
      }
      else{
        res.json({
          success:false,
          message:"Invalid Password"
        })
      }
    })
  }
  else{
    return res.json({
        success:false,
        msg : "Email Id not found! "
    })
  }



})

//Notes 
//getOnenote
//addNote
//deleteNote
//updateNote

//addNote

const noteModel = require('../Models/noteModel.js')
router.post('/addNote',async(req,res)=>{
    let {title,description,isImportant,content,uploadedBy} = req.body;

    let note = noteModel.create({
      title,
      description,
      isImportant,
      content,
      uploadedBy
    })

    res.json({
      success:true,
      message:"Note Added Successfully"
    })

})

router.post('/getNotes',async(req,res)=>{
  let notes = await noteModel.find({uploadedBy:req.body.userId})
  if(notes.length>0){
    res.json(notes);
  }
  else{
    res.json({
      success:false,
      msg: "Note not found!"
    })
  }
})



module.exports = router;