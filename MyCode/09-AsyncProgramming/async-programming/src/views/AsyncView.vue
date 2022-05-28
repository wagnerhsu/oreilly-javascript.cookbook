<template>
  <div>
    <h2>AsyncView</h2>
    <button @click="downloadImage" :disabled="isLoading">Show Image</button>
    <img :src="imgDownload" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
const isLoading = ref(false);
const imgDownload = ref(Blob);
async function getImage() {
  const url = 'https://code.wagner007.top:3510/images/bing.png';

  // Wait (asynchronously) for the response
  const response = await fetch(url);

  if (response.ok) {
    // Wait (asynchronously) for the blob to be read
    const blob = await response.blob();

    // Now show the image
    //const img = document.getElementById('imgDownload');
    imgDownload.value = URL.createObjectURL(blob);
    isLoading.value = false;
  }
}

const downloadImage = async () => {
  isLoading.value = true;
  await getImage();
  console.log('All asynchronous steps completed');
};

//document.getElementById('startCall').addEventListener('click', downloadImage);
</script>
