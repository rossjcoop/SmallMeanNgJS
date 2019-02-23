const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser());

mongoose.connect("mongodb://localhost:27017/practice")