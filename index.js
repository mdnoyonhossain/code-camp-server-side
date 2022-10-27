const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Code Camp Server is Running');
})



app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const persesCourse = course.find(c => c.id === id);
    res.send(persesCourse);
})

app.get('/course', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
    console.log('Codecamp server is port', port);
})