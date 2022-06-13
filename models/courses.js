const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    overview: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        default: 0,
        min: 0,
    },
    owner: {
        type: String,
        lowercase: true
    },
    published: {
        type: Boolean,
        default: false
    },
    chapters: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chapter'
        }
    ],
    quizes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz'
        }
    ]

}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;