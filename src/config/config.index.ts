import dotenv from 'dotenv';

dotenv.config();

const db = {
  mySQL: {
    url: process.env.MY_SQL_URL || '',
    host: process.env.MY_SQL_HOST || '',
    port: Number(process.env.MY_SQL_PORT) || 3306,
    user: process.env.MY_SQL_USER || '',
    password: process.env.MY_SQL_PASSWORD || '',
    database: process.env.MY_SQL_DATABASE || '',
  },
  mongoDB: {
    url: process.env.MONGO_URL || '',
    host: process.env.MONGO_HOST || '',
    port: Number(process.env.MONGO_PORT) || 27017,
    user: process.env.MONGO_USER || '',
    password: process.env.MONGO_PASSWORD || '',
    database: process.env.MONGO_DATABASE || '',
  },
};

export {db};
