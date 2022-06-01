const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    }
    ,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        requoired: true,
        lowercase: true
    }
    , emailverified: {
        type: Boolean,
        default: false,
    }
    ,
    mobileverified: {
        type: Boolean,
        default: false
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);