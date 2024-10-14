import express from 'express';
import dotenv from 'dotenv';
import routes from './src/Routes';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;

const app = express();

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 9c0efe359207b1107eed05d7fa60e5f862feae7d
app.use(express.json());
=======
>>>>>>> aae7d9c (feat: read route for threads | getAllThreads and getThreadsById)
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
