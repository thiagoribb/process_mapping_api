import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import processRouter from "./routes/processRouter";
import subprocessRouter from "./routes/subprocessRouter";

dotenv.config();
const port = process.env.PORT || 8000;
const app: Application = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/process", processRouter);
app.use("/api/subprocess", subprocessRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});