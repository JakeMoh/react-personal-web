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

const PORT = 8080;

const redisClient = redis.createClient();

// {
//   host: keys.redisHost,
//   port: keys.redisPort,
//   // If we lose connect, try to reconnect once every 1 second
//   retry_strategy: () => 1000
// }

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

app.listen(PORT, () => {
  console.log("Connected to express API server");
});