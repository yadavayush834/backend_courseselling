const express = require('express');
const {createUserRoutes} = require("./user ");
const { createCourseRoutes } = require('./routes/course');

const app = express();

createUserRoutes(app);
createCourseRoutes(app);


