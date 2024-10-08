import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
