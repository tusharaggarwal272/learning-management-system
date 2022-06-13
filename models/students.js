const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
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
    role: {
        type: String,
        default: 'student',
        enum: ['student']
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;