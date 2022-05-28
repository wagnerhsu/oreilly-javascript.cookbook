<template>
  <h2>Run Promise Concurrently</h2>
  <button @click="handleRun" :disabled="isProcessing">Run</button>
  <p v-if="!isError">
    {{ normalResult }}
  </p>

  <p class="Error">
    {{ errorResult }}
  </p>
</template>
<script setup>
/*eslint-disable no-unused-vars*/
import { ref } from 'vue';
const normalResult = ref('');
const errorResult = ref('');
const isProcessing = ref(false);
const isError = ref(false);
function randomWaitPromise() {
  return new Promise((resolve) => {
    // Decide how long to wait
    const waitMilliseconds = Math.round(Math.random() * 10000);

    // Simulate an asynchronous task with setTimeout()
    setTimeout(() => {
      console.log(`Resolved after ${waitMilliseconds}`);

      // Return the number of seconds waited
      resolve(waitMilliseconds);
    }, waitMilliseconds);
  });
}
const handleRun = () => {
  isProcessing.value = true;
  // Create three promises
  console.log('About to create 3 promises');
  const promise1 = randomWaitPromise();
  const promise2 = randomWaitPromise();
  const promise3 = new Promise((resolve, reject) =>
    reject(new Error('Test Error'))
  ); //randomWaitPromise();
  const promises = [promise1, promise2, promise3];
  console.log('Finished creating promises; now we wait...');

  // Wait for all of them, then log the result
  Promise.race(promises)
    .then((values) => {
      normalResult.value = `All done with: ${values}`;
    })
    .catch((error) => {
      errorResult.value = `promise.all.error: ${error}`;
    })
    .finally(() => (isProcessing.value = false));
};
</script>
<style scoped>
.Error {
  background-color: red;
}
</style>
