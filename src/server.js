import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRouter from './router/UserRouter.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json())

const port = process.env.PORT;
const url = process.env.URLC;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connect ...')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
});
app.use('/', UserRouter)

