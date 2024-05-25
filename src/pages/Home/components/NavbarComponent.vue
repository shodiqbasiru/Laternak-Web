<script setup lang="ts">
import {RouterLink, useRouter} from 'vue-router';

const router = useRouter();

const handleLogin = () => {
  router.push({name: 'login'});
}

</script>

<template>
  <nav class="flex justify-between items-center p-5 bg-green-600 text-white">
    <div>
      <h1 class="text-2xl font-bold">LaTernak</h1>
    </div>
    <div class="flex items-center">
      <div class="mr-5">
        <router-link to="/" class="text-white font-bold text-xl">Home</router-link>
      </div>
      <div class="mr-5">
        <a href="/products" class="text-white font-bold text-xl">Products</a>
      </div>
      <div class="mr-5">
        <a href="/reviews" class="text-white font-bold text-xl">Reviews</a>
      </div>
    </div>
    <div>
      <button class="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded" @click="handleLogin">
        Login
      </button>
    </div>
  </nav>
</template>

<style scoped>

</style>