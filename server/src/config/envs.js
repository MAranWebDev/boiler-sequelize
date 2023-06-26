/* dotenv */
import 'dotenv/config';

export const {
  NODE_ENV,
  ORM_HOST,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
  REDIS_PORT,
  SERVER_PORT,
} = process.env;
