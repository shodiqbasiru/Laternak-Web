<script setup lang="ts">

import SidebarComponent from "./components/SidebarComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <div class="flex h-screen">
    <SidebarComponent/>
    <div class="flex flex-col flex-1">
      <HeaderComponent/>
      <main class="p-4 overflow-auto">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>