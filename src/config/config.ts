import * as dotenv from 'dotenv';
dotenv.config();


export default  {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST ,
    DB_PORT: process.env.DB_PORT

};