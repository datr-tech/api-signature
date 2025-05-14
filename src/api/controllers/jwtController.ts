import jwt from 'jsonwebtoken';

import { IJwtController } from '@app/interfaces/api/controllers';

export const jwtController: IJwtController = ({ userId }) => {
  console.log({ jwt });

  const token = jwt.sign({ _id: 'ABC', name: 'JOE' }, 'SECRET', {
    expiresIn: '2 days',
  });

  return token;
};
