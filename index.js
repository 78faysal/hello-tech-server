const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());

const coursesData = require('./data/coursesData.json');


app.get('/courseDetail/:courseId', (req, res) => {
  const courseId = parseInt(req.params);
  const course = coursesData.find(course => course.id === courseId);
  console.log(course)
  if(course){
    res.send(course);
  }
})

app.get('/', (req, res) => {
  res.send('hello from hello tech');
});

app.get('/coursesData', (req, res) => {
  res.send(coursesData);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
