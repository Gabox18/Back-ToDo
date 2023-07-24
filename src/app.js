import express, { urlencoded } from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import bodyParser from "body-parser";

const app = express();

// Middlewares
app.use(morgan("dev"));
//app.use(urlencoded({extended:false}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Routes
app.use(indexRoutes);

export default app;
