import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();



app.use(cors())
app.use(cookieParser())
app.use(express.json());


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });