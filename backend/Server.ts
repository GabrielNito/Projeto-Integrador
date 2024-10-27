import express from "express";
import dotenv from "dotenv";
import routes from "./src/Routes";
import cors from "cors";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
