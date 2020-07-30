'use strict';

import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import containerized from 'containerized';

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/item', async (req, res) => {
    const connection = mysql.createConnection({
      host     : containerized() ? 'host.docker.internal' : '127.0.0.1',
      port     : '3307',
      user     : 'kt_docker',
      password : 'kt_docker',
      database : 'kt_docker'
    });

    connection.query('SELECT * FROM ITEM', function(error, results){
        if(error) 
          res.json({error});
        else
          res.json({items: results});
        connection.end();
    });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
