
const express = require('express')
const connectDB = require('./config/db.ts')
const app = express();

const PORT = 3001;
connectDB().then(()=>console.log('DB.. connecteds')).catch(error=>console.log('error',error))
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
