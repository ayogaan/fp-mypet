const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const maxAge = 3 * 24*60*60
const createToken = (id)=>{
  return jwt.sign({id}, 'this is secret', {expiresIn:maxAge});
 }
exports.login = (req, res)=>{
    const{email, password} = req.body;
    User.findOne({email}).then(user=>{
        if(!user){
            return res.status(404).json({email: "user not found"});
        }
        var passwordIsValid = bcrypt.compareSync(password, user.password);
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "invalid password"
            });

        }
        const token = createToken(user._id);
        res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true });
        res.status(200).json(user._id);
       
    })

}

exports.logout = (req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/index.html');
}

exports.register = async (req,res)=>{
    const {name,email,password}= req.body;
    console.log(req.body);
    let user = {};
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hashSync(password, salt);
    user.name = name;
    user.email = email;
    user.password = hashed;
    let newUser = new User(user);
    await newUser.save();
    res.json(newUser);
}

exports.me = async (req,res)=>{
    console.log(req.uid);
    await User.findOne({_id: req.uid.id}).then( user =>{

        return res.status(200).send(user);
        
    }).catch(err=>{
        return res.status(500).send(err);
    })
}