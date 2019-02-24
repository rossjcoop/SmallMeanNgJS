const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser());

const port = 3000;

mongoose.connect("mongodb://localhost:27017/meanpractice");

let thingModel = mongoose.model('thing', {thing: String});

app.get('/', (req, res) => {
    thingModel.find((err, things) => {
        res.send(things);
    });
});

app.post('/add', (req, res) => {
    let thing = req.body.thing;
    let thingDoc = new thingModel({thing: thing});
    thingDoc.save(()=> {
        res.send();
    });
});


app.listen(port, () => {
    console.log("App is running on port "+port)
});