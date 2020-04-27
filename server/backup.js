// API for redis
// This is replaced by postgres
const redisClient = redis.createClient({host: keys.redisHost, port: keys.redisPort});

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

redisClient.on("error", function(error) {
  console.error(error);
});