import {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PORT,
} from './envs';

/* setup */
const values = {
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  dialect: 'postgres',
};

/* dialect */
const database = {
  development: values,
  test: values,
  production: values,
};

export const { development, test, production } = database; // to run commands
export default database; // to run server
