const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authentication");

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send("Hello world from router");
})

// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz filled all the fields" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Plz filled all the fields" });
//             }

//             user = new User({ name, email, phone, work, password, cpassword });

//             user.save().then(() => {
//                 res.status(200).json({ message: "User registered Successfully" });
//             }).catch(err => res.status(500).json({ error: "Failed to register" }));

//         }).catch(err => { console.log(err); });

// });
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled all the fields" });
    }

    try{
        const userExist = await User.findOne({ email: email });

        if(userExist){
            return res.status(422).json({ error: "User already Exist"});
        }
        if(password!=cpassword){
            return res.status(422).json({error:"Password mismatched"});
        }

        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save();

        res.status(200).json({ message: "User registered Successfully" });

    } catch(err){
        console.log(err);
    }

});

router.post('/signin', async (req,res)=>{

    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(406).json({error:"Plz Fill all fields"});
        }

        const userLogin = await User.findOne({email: email})

        // console.log(userLogin);

        if(userLogin==null){
            res.status(400).json({error:"User not registered"});
        }
        else{
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 1200000),
                httpOnly:true
            });


            if(!isMatch){
                res.status(404).json({error:"Wrong credential"});
            }
            else{
                res.status(200).json({error:"User successfully-signin"});
            }
        }
        

    }catch(err){
        console.log(err);
    }
});

router.get('/about', authenticate,  (req, res)=> {
    res.send(req.rootUser);
});

router.post('/contact', authenticate, async (req, res)=> {
    // res.send(req.rootUser);
    const {name, email, phone, message} = req.body;
    if(!name || !email || !phone || !message){
        return res.json({error:"Please fill the form"})
    }

    const userContact = await User.findOne({_id:req.userId});
    if(userContact){
        const userMessage = await userContact.add_Message(name, email, phone, message);

        await userContact.save();

        res.status(201).json({message:"contact message successfully"});
    }
});

// logout page
router.get('/logout', (req, res)=> {
    console.log("You are logged out");
    res.clearCookie("jwtoken", {path:"/"}); //second parameter crealed the navigation history stack
    res.status(200).send("you are logged out");
});

module.exports = router;