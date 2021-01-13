require('dotenv/config');

const app = require('./src/app');

const port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, () => {
  console.log(`App listen on http://localhost:${port}`);
})
