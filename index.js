const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());

const coursesData = require('./data/coursesData.json');



app.get('/', (req, res) => {
  res.send('hello from hello tech');
});

app.get('/courseDetail', (req, res) => {
  res.send(coursesData);
});

// detail with id 
app.get('/courseDetail/:courseId', (req, res) => {
  const courseId = req.params.courseId;
  const course = coursesData.find(course => course.id === courseId);
  if(course){
    res.send(course);
  }
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
