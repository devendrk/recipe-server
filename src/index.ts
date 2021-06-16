
import app from './App'
import  './config/db.ts';
const PORT = process.env.PORT||4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
