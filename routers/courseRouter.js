const express = require('express');
const mongoose = require('mongoose');
const usermodel = require('../models/user');
const Course = require('../models/courses');
const Chapter = require('../models/chapters');
const router = express();
const formidable = require('express-formidable');
// import AWS from 'aws-sdk';
const AWS = require("aws-sdk");
const { nanoid } = require('nanoid');
const { readFileSync } = require("fs");


const awsconfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION,
};

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


router.get('/allcourses', async (req, res) => {
    try {
        const allcourses = await Course.find({}).populate('chapters', 'quizzes');
        return res.status(200).json(allcourses);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: error.message });

    }
})

router.post('/user/courses/:useremail/newcourse', async (req, res) => {
    try {
        // console.log(req.params);
        // console.log(req.body);
        const { coursename, overview, price } = req.body;

        const user = await usermodel.findOne({ email: req.params.useremail });
        console.log(user);
        const courseCreating = await Course.create({ name: coursename, owner: user.username, overview, price });

        await user.courses.push(courseCreating);
        await user.save();
        console.log("done creating the new course");
        return res.status(200).json({ message: `Course with name ${coursename} has been successfully created` });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: 'Someting wrong happened! Unable to create the course' });
    }
});

router.post('/user/courses/:useremail/newchapter', async (req, res) => {
    try {
        // console.log(req.body);
        const { name, description, courseid } = req.body;
        const coursedetail = await Course.findById(courseid);
        console.log(coursedetail);
        const chapternew = await Chapter.create({ name, description });

        coursedetail.chapters.push(chapternew);
        await coursedetail.save();

        console.log(chapternew);
        return res.status(200).send("ok");
    } catch (error) {
        return res.status(400).send(error.message);

    }
});

router.put('/publishunpublishcourse', async (req, res) => {
    console.log("changing the course detail status to make it as pubished or unpublished");
    try {
        const { courseid } = req.body;
        const coursedetail = await Course.findById(courseid);
        coursedetail.published = !coursedetail.published;

        await coursedetail.save();
        return res.status(200).json(coursedetail);

    } catch (error) {
        return res.status(200).json({ msg: error.message });
    }
});

router.post('/findCourseDetails', async (req, res) => {
    console.log("finding the course to populate with the chapters");
    const { courseid } = req.body;
    try {
        const courseDetails = await Course.findById(courseid).populate('chapters');
        console.log(courseDetails);
        return res.status(200).json(courseDetails);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: error.message });
    }
});

router.post('/findChapterdetail', async (req, res) => {
    const { chapterid } = req.body;
    try {
        const chapterdetails = await Chapter.findById(chapterid).populate('videos');
        console.log(chapterdetails);
        return res.status(200).send(chapterdetails);
    } catch (error) {
        return res.status(200).send(error.message);
    }
})

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



router.post('/video-upload', formidable(), async (req, res) => {
    // console.log('in video upload part')
    // return res.status(200).json({ msg: 'video is being uploaded' });
    try {
        const { video } = req.files;
        console.log(video);

        if (!video) return res.status(400).send("No Video")

        const params = {
            Bucket: "lmsdanaliticbucket",
            Key: `${nanoid()}.${video.type.split("/")[1]}`,
            Body: readFileSync(video.path),
            ACL: "public-read",
            ContentType: video.type,
        };
        // console.log(params);

        // const putObjectCommand = new PutObjectCommand(params);

        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(400);
            }
            console.log(data);
            res.send(data);
        });


        // s3.send(putObjectCommand).then(data => {
        //     // do something
        //     console.log(data);
        //     res.send(data);
        // }).catch(error => {
        //     // error handling
        //     console.log(error);
        //     res.sendStatus(400);
        // })

    } catch (error) {
        console.log(error.message);
    }



})
router.post('/video-remove', async (req, res) => {
    try {
        const { video } = req.body;
        const params = {
            Bucket: video.Bucket,
            Key: video.Key
        }

        s3.deleteObject(params, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(400);
            }
            console.log(data);
            res.send({ ok: true });
        });

        // console.log(video);
        // return res.status(200).send("trying to remove the video");
    }
    catch (err) {
        console.log(err.message);
    }
})

module.exports = router;
