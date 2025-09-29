import express from 'express';
import adsRouter from './routes/ads';
import healthRouter from './routes/health';

const app = express();
app.use(express.json());

app.use('/ads', adsRouter);
app.use('/health', healthRouter);

export default app;
