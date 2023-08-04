import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import songRouter from "./routes/songs";
import indexRouter from './routes/index';

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/', indexRouter);
app.use('/songs', songRouter);

const uri: string = `${process.env.DATABASE_URL}`

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })