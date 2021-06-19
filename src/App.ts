import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index";

// import * as errorHandler from './helpers/errorHandler';
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/build"));
app.use("/api", routes);
export default app;