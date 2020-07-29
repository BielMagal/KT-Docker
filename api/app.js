'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import containerized from 'containerized';

const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/health', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.status(200).send('ok');
  next();
});

app.get('/item', async (req, res) => {
  try {
    const connection = mysql.createConnection({
      host     : containerized() ? 'host.docker.internal' : '127.0.0.1',
      port     : '3307',
      user     : 'kt_docker',
      password : 'kt_docker',
      database : 'kt_docker'
    });

    connection.query('SELECT * FROM ITEM', function(error, results){
        connection.end();
        if(error) 
          res.status(500).send(error);
        else
          res.status(200).send(results);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
