import express, { urlencoded } from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import bodyParser from "body-parser";


const app = express();



// Middlewares
app.use(morgan('dev'))
//app.use(urlencoded({extended:false}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));



// Routes
app.use(indexRoutes);

export default app;
