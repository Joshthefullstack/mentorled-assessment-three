import dotenv from 'dotenv';
dotenv.config();
const schema = process.env.DB_SCHEMA || 'public';

exports.TABLES = {
    INTERVIEW: `${schema}.interviews`,
}