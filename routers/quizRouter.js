const express = require('express');
const mongoose = require('mongoose');
const usermodel = require('../models/user');
const Course = require('../models/courses');
const Quiz = require("../models/quiz");
const router = express();

router.post("/newquestion", async (req, res) => {
    try {
        console.log(req.body);

        const result = await Quiz.create({
            quesname: req.body.questionName,
            solution: req.body.questionSol,
            options: req.body.options,
            point: req.body.points,
        })

        return res.status(200).json({
            status: 1,
            data: result
        })
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            error: error.message
        })
    }
})

module.exports = router
