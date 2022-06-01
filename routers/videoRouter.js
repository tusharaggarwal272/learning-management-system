const express = require('express');
const { runInContext } = require('lodash');
const router = express();
const videoModel = require('../models/video');
const Course = require('../models/courses');


router.post('/video-upload', async (req, res) => {
    console.log("creating the video");
    try {
        const { video } = req.body;
        console.log(video);
        const detail = {
            courseName: video.course,
            link: video.video,
            title: video.title,
            description: video.description
        }
        const result = new videoModel(detail);
        // console.log(result);
        const course = await Course.findById(video.courseid);
        course.videos.push(result);
        result.save();
        course.save();
        return res.status(200).json({ msg: 'ok', res: result });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: error.message });
    }
});

router.post('/findCourseDetails', async (req, res) => {
    console.log("finding the course to populate with the videos");
    const { courseid } = req.body;
    try {
        const courseDetails = await Course.findById(courseid).populate('videos');
        console.log(courseDetails);
        return res.status(200).json(courseDetails);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: error.message });
    }
});

module.exports = router;