import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://mohammednihaljm:mohammednihaljm123@cluster0.xzsb5g9.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening port: ${PORT}`);
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("app connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
  
