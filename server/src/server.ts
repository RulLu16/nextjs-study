import express from "express"
import morgan from "morgan"
import {AppDataSource} from "./data-source";
import authRoutes from './routes/auth';

const app = express();

app.use(express.json()); // request json 해석
app.use(morgan("dev"));
app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoutes)

let port = 4000;
app.listen(port, async () => {
    console.log('server running');

    AppDataSource.initialize().then(async () => {
        console.log("Inserting a new user into the database...")
    }).catch(error => console.log(error))
})