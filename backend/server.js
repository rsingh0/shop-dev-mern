import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config({ path: './config.env' });

connectDB();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Dev Shop API ...');
});

app.use('/api/v1/products', productRoutes);

// Error handaling middleware for 404
app.use(notFound);

// Error handaling middleware (interceptor) for invalid mongoose id passed
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold
  )
);
