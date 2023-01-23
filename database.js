import myqsql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const pool = myqsql2.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_
}).promise()
