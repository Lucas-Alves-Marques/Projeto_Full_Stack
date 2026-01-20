import express from 'express';
import router from './routes.js';
import { logger } from './middleware/logger.js';

const app = express();

app.use(express.json());
app.use(logger);
app.use(router);

app.listen(3000, () => console.log("🛜 API rodando em http://localhost:3000"));