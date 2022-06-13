const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    quesname: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    solution: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    options: [
        {
            type: Object,
        }
    ],

    point: {
        type: Number,
        required: true,
        min: 0,
    }
}, {
    timestamps: true
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
