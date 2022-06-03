require('dotenv').config();
const express = require('express');
const app = express();
const connectdb = require('./db')
const usermodel = require('./models/user')
const otpmodel = require('./models/otpModel');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter')
const courseRouter = require('./routers/courseRouter');
const videoRouter = require('./routers/videoRouter');
const path = require('path');


app.use(express.json());
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRouter);
app.use('/users/verification', authRouter);
app.use('/api/courses', courseRouter);
app.use('/api/courses/videos', videoRouter);
// app.get('/', (req, res) => {
//     console.log("Hello from world");
// })



if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}

const PORT = process.env.PORT || 3080;

app.listen(PORT, (req, res) => {
    console.log(`The server is running at port ${PORT}`);
})