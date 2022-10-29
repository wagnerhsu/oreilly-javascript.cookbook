import { wait } from './waitDemo';
wait.then(() => {
  console.log('Hi');
});
console.log('done');
