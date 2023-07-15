/* bull */
import Queue from 'bull';

/* envs */
import { REDIS_HOST, REDIS_PORT } from '../config/envs';

export const userQueue = new Queue('userQueue', {
  redis: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});
