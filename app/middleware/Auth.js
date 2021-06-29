
const jwt = require("jsonwebtoken")
const Auth = (req, res, next)=>{
    const token = req.cookies.jwt;
    if(token){
      jwt.verify(token,'this is secret', (err,decodedToken)=>{
        if(err){
          console.log(err);
          res.redirect('/login.html')
        }else{
          req.uid = decodedToken
          next();
        }
      })
      
    }
    else{
      res.redirect('/login.html')
    }
  }

  module.exports = Auth