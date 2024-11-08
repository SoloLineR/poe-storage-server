import pg from "pg";
import "dotenv/config";
export const db = new pg.Pool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  port: Number(process.env.DB_PORT),
});
