const express = require('express');
const router = express.Router();

const otpmodel = require('../models/otpModel');
const usermodel = require('../models/user');



router.post('/register', async (req, res) => {
    const { email, password, number, fullname } = req.body;
    console.log("in register route");
    try {
        // const hashpass = await bcrypt.hash(password, 12);
        const user = await usermodel.create({ email: email, password: password, contact: number, username: fullname });
        console.log(user);

        return res.status(200).json({ msg: "user created successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: "cant create user" });
    }
})

router.post('/login', async (req, res) => {

    try {

        console.log(req.body)
        const user = await usermodel.findOne({ email: req.body.email });
        console.log(user);
        console.log(user.password);
        // const result = await bcrypt.compare(req.body.password, user.password);
        // console.log(result)

        // if(result){
        if (user.password === req.body.password)
            return res.status(200).json({
                name: user.username, email: user.email, contact: user.contact,
                emailverified: user.emailverified, mobileverified: user.mobileverified, msg: "Login success"
            })
        else {
            return res.status(200).json({ msg: "Login failed" })
        }

    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ error: "oops!something went wrong" })
    }
})

module.exports = router;