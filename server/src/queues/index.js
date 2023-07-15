/* queues */
import { userQueue } from './userQueue';

userQueue.process((job, done) => {
  console.log('alfin!', job.data);
  done();
});
