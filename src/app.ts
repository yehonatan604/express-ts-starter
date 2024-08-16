// general imports
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// custom imports
import MessageResponse from './Data/interfaces/MessageResponse';
import { notFound } from './API/Middleware/notFound.mw';
import { errorHandler } from './API/Middleware/errorResponse.mw';

// load environment variables
require('dotenv').config();

// create an express app
const app = express();

// add middleware to the express app
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// add routes to the express app
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// add response middleware to the express app
app.use(notFound);
app.use(errorHandler);

// start the express app
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
