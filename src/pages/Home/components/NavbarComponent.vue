<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <nav class="flex justify-between p-5">
    <div>
      <h1>Navbar</h1>
    </div>
    <ul class="flex">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div>
      <Button
          label="Login"
          class="bg-emerald-600"
      />
    </div>
  </nav>
</template>

<style scoped>

</style>