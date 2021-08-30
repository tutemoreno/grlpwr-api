import cors from 'cors';
import express from 'express';
import config from './config.js';
import './database.js';
import Router from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use(Router);

app.listen(config.PORT);
console.log('Server on port', config.PORT);
