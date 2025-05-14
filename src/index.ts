import { app } from '@app/api';
import { CONST_PORTS_SERVER_DEFAULT } from '@app/config/consts/ports';
import { logger } from '@app/utils/logger';
import 'dotenv/config';

const port = process.env.SERVER_PORT || CONST_PORTS_SERVER_DEFAULT;

app.listen(port, () => {
  logger.info(`signature-api listening on port ${port}`);
});
