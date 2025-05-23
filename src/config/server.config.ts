import * as dotenv from 'dotenv';

dotenv.config();

export const ServerConfig = {
  APP_PORT: process.env.APP_PORT,
};
