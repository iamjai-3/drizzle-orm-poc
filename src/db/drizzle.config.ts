import type { Config } from 'drizzle-kit';
import { config } from '../config/config';

export default {
  schema: './schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name
  }
} satisfies Config;
