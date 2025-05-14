import { jwtController } from '@app/api/controllers';
import { paramUserIdValidator } from '@app/api/validators';
import { CONSTS_ROUTES_BASE } from '@app/config/consts/routes';
import { IRouter } from '@app/interfaces/api';
import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';

const router = express.Router({ mergeParams: true });

export const jwtRouter: IRouter = router.get(
  CONSTS_ROUTES_BASE,
  paramUserIdValidator,
  async (req: Request, res: Response) => {
    const error = validationResult(req);

    if (error.isEmpty()) {
      const { userId } = matchedData(req);
      const jwt = jwtController({ userId });
      res.send({ jwt });
    } else {
      res.status(404).send({ error: error.array() });
    }
  },
);
