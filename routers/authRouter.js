const express = require('express');
const router = express.Router();

const Otp = require('../models/otpModel');
const User = require('../models/user');
const Email = require('../models/otpModelEmail');

const _ = require('lodash');
const axios = require('axios');
const otpGenerator = require('otp-generator');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const path = require('path');
const nodemailer = require('nodemailer');

router.post('/mobileverified', async (req, res) => {
    //will send the otp
    console.log("getting the mobile veified");
    var { contact } = req.body;
    // console.log(contact)
    try {
        // const user = await User.findOne({
        //     contact: contact
        // });
        // if (user) return res.status(400).send("User already registered!");
        const OTP = otpGenerator.generate(6, {
            digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false
        });
        console.log(OTP);
        //     // console.log(number);

        //     // const hashed = await bcrypt.hash(OTP, 12);
        //     // console.log(hashed);
        const otp = new Otp({ number: contact, otp: (OTP) });
        //     // console.log(otp);
        var result = await otp.save();
        var nc = contact;

        // console.log(result);
        contact = `+91${contact}`;

        // client.messages
        //     .create({
        //         body: `Your Verification code is ${OTP}`,
        //         from: '+17166870612',
        //         to: contact,
        //     })
        //     .then(message => console.log(message.sid));
        // res.redirect(`/api/user/signup/verify/${nc}`);

        return res.status(200).json({ msg: "otp sent" })
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ msg: error.message });
    }

})

router.post('/mobileverified/verify', async (req, res) => {
    //will verify the mobile otp

    const otpholder = await Otp.find({
        number: req.body.number
    })
    // console.log(otpholder);
    if (otpholder.length == 0) return res.status(400).send("You have used an expired OTP");

    const rightotpfind = otpholder[otpholder.length - 1];
    // const validuser = await bcrypt.compare(req.body.otp, rightotpfind.otp);
    // console.log()
    console.log(typeof (rightotpfind.number), typeof (req.body.number), typeof (rightotpfind.otp), typeof (req.body.otp));

    if (rightotpfind.number === req.body.number && rightotpfind.otp === parseInt(req.body.otp)) {
        // const user = new User(_.pick(req.body, ["number"]));

        try {
            console.log("getting mobilenumber verified");
            const user = await User.findOneAndUpdate({ "contact": req.body.number }, { "mobileverified": true });
            // const token = user.generateJWT();
            // const result = await user.save()
            const otpDelete = await Otp.deleteMany({
                number: req.body.number
            })
            // return res.status(200).send({
            //     message: "User Registration Successfull",
            //     token: token,
            //     data: result
            // })
            // res.render('success');
            return res.status(200).json({ msg: 'Mobile Number verified' });

        } catch (error) {
            console.log(err.message);
            return;
        }

    }
    else {
        return res.status(400).send("Your OTP was wrong");
        // res.redirect('/');
    }




})

router.post('/emailverified', async (req, res) => {
    //will send the otp on email:

    console.log("getting the email verified")
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tusharaggarwal191302004@gmail.com',
                pass: process.env.PASS
            }
        });
        const OTP = otpGenerator.generate(6, {
            digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false
        });
        const otp = new Email({ email: req.body.email, otp: (OTP) });
        //     // console.log(otp);
        var result = await otp.save();
        let mailoptions = {
            from: 'tusharaggarwal191302004@gmail.com',
            to: `${req.body.email}`,
            subject: 'Your OTP for usmart validation',
            text: `Your OTP is ${OTP}`,


        }
        transporter.sendMail(mailoptions, function (err, data) {
            if (err) {
                console.log(err);
                console.log(err.message);
            }
            else {
                console.log('data sent successfully');
            }
        })

        return res.status(200).json({ msg: 'sent the otp on your email' });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ 'msg': error.message })
    }

})

router.post('/emailverified/verify', async (req, res) => {
    //will verify the otp on email:
    console.log()
    console.log(req.body);
    console.log(req.body.email);
    const otpholder = await Email.find({
        email: req.body.email
    })
    // console.log(otpholder);
    if (otpholder.length == 0) return res.status(400).send("You have used an expired OTP");

    const rightotpfind = otpholder[otpholder.length - 1];
    // const validuser = await bcrypt.compare(req.body.otp, rightotpfind.otp);
    // console.log()
    // console.log(typeof (rightotpfind.number), typeof (req.body.number), typeof (rightotpfind.otp), typeof (req.body.otp));

    if (rightotpfind.email === req.body.email && rightotpfind.otp === parseInt(req.body.otp)) {
        // const user = new User(_.pick(req.body, ["number"]));

        try {
            console.log("getting email verified");
            const user = await User.findOneAndUpdate({ "email": req.body.email }, { "emailverified": true });
            // const token = user.generateJWT();
            // const result = await user.save()
            const otpDelete = await Otp.deleteMany({
                email: req.body.email
            })
            // return res.status(200).send({
            //     message: "User Registration Successfull",
            //     token: token,
            //     data: result
            // })
            // res.render('success');
            return res.status(200).json({ msg: 'Email Number verified' });

        } catch (error) {
            console.log(err.message);
            return;
        }

    }
    else {
        return res.status(400).send("Your OTP was wrong");
        // res.redirect('/');
    }



})



module.exports = router;