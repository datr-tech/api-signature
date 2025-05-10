import { param } from 'express-validator';
import { CONSTS_PARAMS_USER_ID } from '@app/config/consts/params';
import { IValidator } from '@app/interfaces/api';

export const paramUserIdValidator: IValidator = param(CONSTS_PARAMS_USER_ID).notEmpty();
