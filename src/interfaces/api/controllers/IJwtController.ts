import { IJwtControllerInput } from './IJwtControllerInput';
import { IJwtControllerOutput } from './IJwtControllerOutput';

export interface IJwtController {
  (args: IJwtControllerInput): IJwtControllerOutput;
}
