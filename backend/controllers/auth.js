const User = require('../models/user')
const jwt  = require('jsonwebtoken');
const expressJwt  = require('express-jwt'); 
const {check,validationResult} = require('express-validator')

exports.signup  = (req,res)=>{
  const user = new User(req.body);
  user.save((err,user)=>{
    if(err){
        return res.status(400).json({
            err:"NOT able to save user in DB"
        })
    }
    res.json({
        name : user.name,
        email:user.email,
        id   :user._id
    });
  })
};

exports.signout = (req,res) =>{
    res.clearCookie("token");
    
    res.json({
        message: "User signout"
    });
}
exports.home = (req,res) =>{
    res.send("hellow")
}
exports.login = (req,res) =>{
    const  errors = validationResult(req);
    const {email,password} = req.body     // deconstructing or taking out email and password from login route
    User.findOne({email},(err, user) =>{        // finding the user in database using email and using function findOne()
        if(err || !user){
          return res.status(400).json({
                error: "USER email does not exist"
            })
        }
        if(!user.authenticate(password)){     /* this authenticate method is created by us in model database file , where we pass plainpassword and check it with provided password....*/
        return res.status(401).json({
              error:"Email and Password do not match!"
          })
        }
        
        //creating token for user login
        const token = jwt.sign({_id:user._id},"shhh")
        
        //putting token in cookie
        res.cookie("token",token);
       
        //send response to front end 
        const {_id, name , email } = user;
        return res.json({token,user:{_id,name,email}})  // if email and password both are correct and exist in db then displaying some fields in frnot-end in json formatt
      
    })
};

// using protected routes....

// exports.isLogedIn = expressJwt({
//     secret:"sssshhh",
//     userProperty: "user"
// });