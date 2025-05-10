import express from 'express';
import { jwtRouter } from '@app/api/routers';

const app = express();

app.use(express.json());

app.use(`/api/v1/jwt/:userId`, jwtRouter);

export { app };
