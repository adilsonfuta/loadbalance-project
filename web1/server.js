const express = require('express');
const redis = require('redis');
let numVisitToDisplay =null;

const PORT = 5000;
const app = express();

const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

app.get('/',function(req, res) {
  redisClient.get('numVisits', function (err, numVisit) {
    numVisitToDisplay = parseInt(numVisit) + 1;

    if(isNaN(numVisitToDisplay)){
      numVisitToDisplay = 1;
    }

    res.send(`Numero de visitas ao site ${numVisitToDisplay}`);
    numVisit++;
    redisClient.set('numVisits',numVisit);
  });
});


app.listen(PORT, ()=>{
  console.log(`Web app on port ${PORT}`);
})