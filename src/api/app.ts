import { jwtRouter } from '@app/api/routers';
import express from 'express';

const app = express();

app.use(express.json());

app.use(`/api/v1/jwt/:userId`, jwtRouter);

export { app };
