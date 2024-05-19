import path from 'path'; //join and resolve methods
import express from 'express';
import dotenv from 'dotenv'; //automatically loads environment variables from a .env
import cookieParser from 'cookie-parser';
dotenv.config(); //requires and config dotenv
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json()); //For post and put req - parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.urlencoded({ extended: true })); // recognises the incoming Request Object as strings or arrays
app.use(cookieParser()); //parses incoming cokies

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static('/var/data/uploads'));
  app.use(express.static(path.join(__dirname, '/front-end/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'))
  );
} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);

