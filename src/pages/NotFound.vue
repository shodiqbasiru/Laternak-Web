<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-96 bg-white p-5 rounded-lg shadow-lg">
      <div class="flex justify-center">
<!--        <img src="@/assets/404.svg" alt="404 Illustration" class="w-100 h-100"/>-->
      </div>
      <div class="mt-5">
        <h1 class="text-2xl font-bold text-center">Page Not Found</h1>
        <p class="text-center">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
      </div>
      <router-link to="/" class="mt-5 block text-center text-amber-600 hover:underline">Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>