const mongoose = require('mongoose');
const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
}, {
    timestamps: true
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
