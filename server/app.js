const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const redis = require('redis');

// retrieve keys
const keys = require('./keys');

// app receives and responses to http requests coming or going
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

const redisClient = redis.createClient({host: keys.redisHost, port: keys.redisPort});

redisClient.on("error", function(error) {
  console.error(error);
});

app.get('/getvalues', async (req, res) => {
  redisClient.hgetall('values', (err, values) => {
    res.send(values);
  });
});

app.post('/setvalue', async (req, res) => {
  const index = req.body.index;
  console.log(index);
  // const updatedIndex = index * 10;

  redisClient.hset('values', index, 5);
  res.sendStatus(200);
})

app.get('/', function(req, res) {
  res.send("Hi");
});

app.get('/send', function(req, res) {
  console.log("/send");
  res.send("Hi is sent to you!");
});

///////////////////////////

app.post('/api/postComment', async (req, res) => {

  console.log("name");
  console.log(req.body.name);
  console.log("comment");
  console.log(req.body.comment);
  
  redisClient.hset('nameComment', req.body.name, req.body.comment);
  res.sendStatus(200);
})

app.get('/api/getComment', async (req, res) => {
  redisClient.hgetall('nameComment', (err, values) => {
    console.log("GET")
    console.log(values);
    res.send(values);
  });
});






///////////////////////////

app.listen(PORT, () => {
  console.log("Connected to express API server");
});