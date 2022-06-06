const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
    },
    chapterName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
        lowercase: true,
    }

}, {
    timestamps: true
})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;