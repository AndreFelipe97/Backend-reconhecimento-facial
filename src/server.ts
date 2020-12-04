import express from 'express';
import routes from './routes';

const app = express();

app.use(routes)

app.listen(3331, () => {
  console.log(`Server stated in port 3331`);
})
