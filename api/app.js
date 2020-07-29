'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 8081;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/health', (req, res, next) => {
  console.log('Received healthcheck on /health ' + new Date())
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.status(200).send('ok');
  next();
});

app.get('/item', async (req, res) => {
  try {
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Internal server error: ${JSON.stringify(err)}`);
  }
});

app.use('/', (req, res, next) => {
  console.log('Received healthcheck on / ' + new Date())
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.status(200).send('ok');
  next();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});