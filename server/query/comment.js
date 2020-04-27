const { Pool } = require('pg');
const keys = require('../keys');


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

createUserTable();

function createUserTable() {
  const createTable = `
  CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      name VARCHAR (50) NOT NULL,
      comment TEXT
  )
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
  }

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
      console.log(`______ INSERTION _____\nid: ${insertedData.user_id}\nname: ${insertedData.name}\ncomment: ${insertedData.comment}\n______________________`);
      response.status(201).send(`id: ${insertedData.user_id} name: ${insertedData.name} comment: ${insertedData.comment} is added to users table`);
    })
    .catch(err => {
      console.error(err.stack);
    });
}

const retrieveUsers = function(request, response) {
  const retrieveQuery = `
  SELECT * FROM users
  `;

  pgClient
    .query(retrieveQuery)
    .then(res => response.status(200).send(res.rows))
    .catch(err => console.error(err.stack));
}

const deleteUser = function(request, response) {
  const user_id  = request.params.id

  const deleteQuery = `
  DELETE
  FROM users
  WHERE user_id = $1
  `;

  pgClient
    .query(deleteQuery, [user_id])
    .then(res => {
      console.log(`______ DELETION ______\nid: ${user_id}\n______________________`);
      response.status(200).send(`id: ${user_id} is deleted from users table`);
    })
    .catch(err => {
      console.error(err.stack);
    });
}


module.exports = {
  createUser,
  retrieveUsers,
  deleteUser
};