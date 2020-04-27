const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// import local files
const comment = require('./query/comment');

// app receives and responses to http requests
const app = express();
app.use(cors());
app.use(bodyParser.json());
//==============================================

app.post('/api/users', comment.createUser);
app.get('/api/users', comment.retrieveUsers);
app.delete('/api/users/:id', comment.deleteUser);

// app.delete('/api/test/:id', (req, res) => {
//   res.send("Hi");
// });

app.listen(5000, () => {
  console.log("Connected to express API server");
});