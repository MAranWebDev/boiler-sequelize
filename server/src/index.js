/* express */
import express from 'express';

/* envs */
import { SERVER_PORT } from './config/envs';

/* routes */
import { usersRoutes } from './routes/usersRoutes';

/* setup */
const app = express();
app.use(express.json()); /* accept json */
app.use(express.urlencoded({ extended: true })); /* accept nested query */

/* routes */
app.use('/api', usersRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

/* server start */
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
