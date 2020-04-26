const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const redis = require('redis');
const { Pool } = require('pg');

// retrieve keys
const keys = require('./keys');

// app receives and responses to http requests coming or going
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

const redisClient = redis.createClient({host: keys.redisHost, port: keys.redisPort});

const pgClient = new Pool({
  host: keys.pgHost,
  port: keys.pgPort,
  user: keys.pgUser,
  password: keys.pgPassword,
  database: keys.pgDatabase,
});

pgClient.on("error", (err, client) => {
  console.error("Error: ", err);
});

const createTable = `
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    comment TEXT
);
`;


pgClient
  .query(createTable)
  .then(res => {
    console.log('Table is successfully created');
  })
  .catch(err => {
    console.errer(err);
  })
  .finally(() => {
  });

// const insertInto = `
// INSERT INTO users (user_id, name, comment)
//     VALUES (1, 'Jake', 'This is comment by Jake');
// `;
  

// pgClient
//   .query(insertInto)
//   .then(res => {
//     console.log("user has be inserted in TABLE");
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     pgClient.end();
//   });

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

// app.post('/api/postComment', async (req, res) => {

//   console.log("name");
//   console.log(req.body.name);
//   console.log("comment");
//   console.log(req.body.comment);
  
//   redisClient.hset('nameComment', req.body.name, req.body.comment);
//   res.sendStatus(200);
// })

// app.get('/api/getComment', async (req, res) => {
//   redisClient.hgetall('nameComment', (err, values) => {
//     console.log("GET")
//     console.log(values);
//     res.send(values);
//   });
// });

const createUser = function(request, response) {
  const { name, comment } = request.body

  const insertQuery = `
  INSERT INTO users (name, comment)
  VALUES ($1, $2)
  RETURNING user_id, name, comment
  `;

  pgClient
    .query(insertQuery, [name, comment])
    .then(res => {
      const insertedData = res.rows[0];
      // console.log(`id: ${res.user_id} name: ${res.name} comment: ${res.comment} is added to users table`);
      response.status(201).send(`id: ${insertedData.user_id} name: ${insertedData.name} comment: ${insertedData.comment} is added to users table`);
    })
    .catch(err => {
      console.error(err.stack);
    })
}

app.post('/api/users', createUser);

const retrieveUsers = function(request, respond) {

  const retrieveQuery = `
  SELECT * FROM users
  `;

  pgClient
    .query(retrieveQuery)
    .then(res => respond.status(200).send(res.rows))
    .catch(err => console.error(err.stack))
}

app.get('/api/users', retrieveUsers);



///////////////////////////

app.listen(PORT, () => {
  console.log("Connected to express API server");
});