const express = require('express');
const router = express.Router();

const studentmodel = require('../models/students');
const coursemodel = require('../models/courses');


router.put('/addtocart/:studentemail/:courseid', async (req, res) => {
    const { studentemail, courseid } = req.params;
    console.log(studentemail, courseid);
    try {
        const student = await studentmodel.findOne({ email: studentemail });
        const course = await coursemodel.findById(courseid);

        let arr = student.cart.filter((c) => {
            return c == courseid;
        })
        if (arr.length) {
            console.log("the same course is already present in yout cart")
            return res.status(400).json({ msg: 'the same course is already present in yout cart' });
        }
        else {
            console.log(student, course);
            await student.cart.push(course);

            await student.save();
            return res.status(200).json(student);
        }
    } catch (error) {
        console.log("in catch", error.message);
        return res.status(400).json({ msg: error.message });
    }
});

module.exports = router;
