const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

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

        user = new User({ name, email, phone, work, password, cpassword });

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
            return res.status(400).json({error:"Plz Fill all fields"});
        }

        const userLogin = await User.findOne({email: email})

        console.log(userLogin);

        if(userLogin==null){
            res.status(400).json({error:"User not registered"});
        }
        else{
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 258950000),
                httpOnly:true
            });

            if(!isMatch){
                res.status(404).json({error:"Wrong Password"});
            }
            else{
                res.status(200).json({error:"User successfully-signin"});
            }
        }
        

    }catch(err){
        console.log(err);
    }
});


module.exports = router;