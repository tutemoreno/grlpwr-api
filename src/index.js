import cors from 'cors';
import express from 'express';
import './config.js';
import './database.js';
import Router from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use(Router);

app.listen(process.env.PORT);
console.log('Server on port', process.env.PORT);
