import dotenv from 'dotenv'

dotenv.config({path: `.env.${process.env.NODE_ENV ?? 'local'}`});

const {
    NODE_ENV,
    PORT,
    HOST,
    DB_USER,
    DB_PASSWD,
    DB_NAME,
    DB_HOST,
    DB_PORT,
} = process.env;

console.log(HOST)
export const host = HOST;
export const port = +(PORT ?? 3000);
export const psqlURL = `postgresql://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

console.log(psqlURL)