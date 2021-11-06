import './loadEnv.js';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', usersRoutes);

const USERNAME = process.env.DB_NAME;
const PASSWORD = process.env.DB_PASS;

const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fcjsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT = 5000;


mongoose.connect(CONNECTION_URL, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true
})
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));
