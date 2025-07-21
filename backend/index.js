import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tasksRoutes from "./routes/tasks.js";
import { db } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.listen(PORT, () => {
  console.log("Servidor backend en puerto", PORT);
});
