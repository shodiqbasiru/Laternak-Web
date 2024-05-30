<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col bg-gray-200 text-gray-800 w-64 py-4">
    <div class="flex flex-col items-center">
      <h1 class="text-2xl font-bold">LaTernak</h1>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png" alt="LaTernak Logo" class="w-36 h-36 object-cover rounded-full mt-2">
      <small class="mt-2 text-sm">Seller</small>
      <p>Muhammad Fulan</p>
    </div>
    <nav class="flex flex-col mt-5 gap-y-5">
      <router-link to="/dashboard-admin" class="flex items-center gap-x-5 text-xl font-semibold tracking-wide px-6 py-4 rounded-md hover:bg-amber-500">
        <i class="pi pi-home text-xl font-bold"></i>
        <span>Dashboard</span>
      </router-link>
      <router-link to="/dashboard-admin/products" class="flex items-center gap-x-5 text-xl font-semibold tracking-wide px-6 py-4 rounded-md hover:bg-amber-500">
        <i class="pi pi-shopping-bag text-xl font-bold"></i>
        <span>Products</span>
      </router-link>
      <router-link to="/dashboard-admin/orders" class="flex items-center gap-x-5 text-xl font-semibold tracking-wide px-6 py-4 rounded-md hover:bg-amber-500">
        <i class="pi pi-shopping-cart text-xl font-bold"></i>
        <span>Orders</span>
      </router-link>
      <router-link to="/dashboard-admin/customers" class="flex items-center gap-x-5 text-xl font-semibold tracking-wide px-6 py-4 rounded-md hover:bg-amber-500">
        <i class="pi pi-users text-xl font-bold"></i>
        <span>Customers</span>
      </router-link>
      <router-link to="/dashboard-admin/settings" class="flex items-center gap-x-5 text-xl font-semibold tracking-wide px-6 py-4 rounded-md hover:bg-amber-500">
        <i class="pi pi-cog text-xl font-bold"></i>
        <span>Settings</span>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>

</style>