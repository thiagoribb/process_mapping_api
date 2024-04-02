import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import processRouter from "./routes/processRouter";

dotenv.config();

const app: Application = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/process", processRouter);

const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});