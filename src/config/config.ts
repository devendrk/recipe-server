import 'dotenv/config';


export default  {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST as string,
    DB_PORT: process.env.DB_PORT

};