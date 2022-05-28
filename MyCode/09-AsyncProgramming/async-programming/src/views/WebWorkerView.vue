<template>
  <h2>WebWorker</h2>
  <p>
    Do a prime number search from <input id="from" :value="fromNumber" /> to
    <input id="to" :value="toNumber" />.
  </p>
  <button id="search" @click="handleStart">Start</button>
  <button id="cancel" @click="handleCancel">Cancel</button>
  <p>{{ status }}</p>
  <p>{{ result }}</p>
</template>
<script setup>
import { ref } from 'vue';
const fromNumber = ref(1);
const toNumber = ref(100000);
const status = ref('');
const result = ref('');
let worker;
const handleStart = () => {
  // Create the worker
  worker = new Worker('/public/prime-worker.js');

  status.value = 'Search started.';

  // Report error message on the page
  worker.onerror = (error) => {
    status.value = error.message;
  };

  // Handle messages from the worker
  worker.onmessage = (event) => {
    console.log('Received a message from the worker');
    const primes = event.data;

    result.value = primes.join(', ');
  };

  // Get the search range and tell the worker to start
  result.value = '';

  worker.postMessage({ from: fromNumber, to: toNumber });
  console.log('Worker started');
};

const handleCancel = () => {
  console.log('Cancelling worker');
  worker.terminate();
};
</script>
