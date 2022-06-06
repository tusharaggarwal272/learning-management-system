const express = require('express');
const { runInContext } = require('lodash');
const router = express();
const videoModel = require('../models/video');
const Course = require('../models/courses');
const Chapter = require('../models/chapters');


router.post('/video-upload', async (req, res) => {
    console.log("creating the video");
    try {
        const { video } = req.body;
        console.log(video);
        const detail = {
            chapterName: video.chapter,
            link: video.video,
            title: video.title,
            description: video.description
        }
        const result = new videoModel(detail);
        // console.log(result);
        const chapter = await Chapter.findById(video.chapterid);
        chapter.videos.push(result);
        await result.save();
        await chapter.save();
        return res.status(200).json({ msg: 'ok', res: result });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: error.message });
    }
});



module.exports = router;