const express = require('express');
const mongoose = require('mongoose');
const usermodel = require('../models/user');
const Course = require('../models/courses');
const router = express();
const formidable = require('express-formidable');
// import AWS from 'aws-sdk';
// const AWS = require("aws-sdk");
// const { nanoid } = require('nanoid');
// const { readFileSync } = require("fs");


// const awsconfig = {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
//     apiVersion: process.env.AWS_API_VERSION,
// };

// const credentials = {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// };
// const config = {
//     region: process.env.AWS_REGION,
//     credentials,
// }





const s3 = new AWS.S3(awsconfig);

// const s3 = new S3Client(config);


router.post('/user/courses/:useremail/newcourse', async (req, res) => {
    try {
        // console.log(req.params);
        // console.log(req.body);
        const { coursename } = req.body;

        const user = await usermodel.findOne({ email: req.params.useremail });
        console.log(user);
        const courseCreating = await Course.create({ name: coursename, owner: user.username });

        await user.courses.push(courseCreating);
        await user.save();
        console.log("done creating the new course");
        return res.status(200).json({ message: `Course with name ${coursename} has been successfully created` });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Someting wrong happened! Unable to create the course' });
    }
});

router.post('/user', async (req, res) => {
    try {
        console.log("trying to fetch the courses of the current user");
        const user = await usermodel.findOne({ email: req.body.email }).populate('courses');
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ msg: 'Something went wrong try to fetch the courses again' });
    }
});



// router.post('/video-upload', formidable(), async (req, res) => {
//     // console.log('in video upload part')
//     // return res.status(200).json({ msg: 'video is being uploaded' });
//     try {
//         const { video } = req.files;
//         console.log(video);

//         if (!video) return res.status(400).send("No Video")

//         const params = {
//             Bucket: "lmsdanaliticbucket",
//             Key: `${nanoid()}.${video.type.split("/")[1]}`,
//             Body: readFileSync(video.path),
//             ACL: "public-read",
//             ContentType: video.type,
//         };
//         // console.log(params);

//         // const putObjectCommand = new PutObjectCommand(params);

//         s3.upload(params, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(400);
//             }
//             console.log(data);
//             res.send(data);
//         });


//         // s3.send(putObjectCommand).then(data => {
//         //     // do something
//         //     console.log(data);
//         //     res.send(data);
//         // }).catch(error => {
//         //     // error handling
//         //     console.log(error);
//         //     res.sendStatus(400);
//         // })

//     } catch (error) {
//         console.log(error.message);
//     }



// })
// router.post('/video-remove', async (req, res) => {
//     try {
//         const { video } = req.body;
//         const params = {
//             Bucket: video.Bucket,
//             Key: video.Key
//         }

//         s3.deleteObject(params, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(400);
//             }
//             console.log(data);
//             res.send({ ok: true });
//         });

//         // console.log(video);
//         // return res.status(200).send("trying to remove the video");
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// })

module.exports = router;
