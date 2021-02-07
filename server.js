const app = require('./src/app') 
const dotEnv = require('dotenv')

dotEnv.config();
const PORT = process.env.PORT


app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`O app está rodando em http://localhost: ${PORT}`);

}); 