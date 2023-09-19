import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT: number = Number(process.env.SERVER_PORT) || 1337;

const DB_USER: string = process.env.DB_USER || '';
const DB_PASSWORD: string = process.env.DB_PASSWORD || '';
const DB_HOST: string = process.env.DB_HOST || '';
const DB_NAME: string = process.env.DB_NAME || '';
const DB_PORT: number = Number(process.env.DB_PORT);

export const config = {
  server: {
    port: SERVER_PORT
  },
  database: {
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    name: DB_NAME
  }
};
