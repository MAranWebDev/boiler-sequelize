/* queues */
import { userQueue } from './userQueue';

userQueue.process((job, done) => {
  console.log(job.data);
  console.log('alfin!');
  done();
});
