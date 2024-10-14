import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from './swagger.json';
import routes from './src/Routes';

dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
