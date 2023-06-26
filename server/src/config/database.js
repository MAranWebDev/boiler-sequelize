import {
  ORM_HOST,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from './envs';

const values = {
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  host: ORM_HOST,
  port: POSTGRES_PORT,
  dialect: 'postgres',
};

const environment = {
  development: values,
  test: values,
  production: values,
};

export const { development, test, production } = environment;
