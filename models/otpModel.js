const mongoose = require('mongoose');
const otpSchema = new mongoose.Schema({
    number: {
        type: Number,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }
    ,createdAt:{
        type:Date,
        default:Date.now,
        index:{expires:300}
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Otp', otpSchema);