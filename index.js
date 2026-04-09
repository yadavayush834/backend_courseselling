const express = require('express');
const {createUserRoutes} = require("./user ");
const { createCourseRoutes, courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');

const app = express();

app.use(userRouter);
app.use(courseRouter);


