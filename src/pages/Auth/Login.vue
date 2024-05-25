<script setup lang="ts">
import LoginIllustration from '../../assets/login-ilustration.svg';
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-96 bg-white p-5 rounded-lg shadow-lg">
      <div class="flex justify-center">
        <img :src="LoginIllustration" alt="Login Illustration" class="w-40 h-40"/>
      </div>
      <div class="mt-5">
        <h1 class="text-2xl font-bold text-center">Login</h1>
        <form class="mt-5">
          <div class="mb-5">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email"
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          <div class="mb-5">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password"
                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          <div class="flex justify-between items-center">
            <button type="submit"
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Login
            </button>
            <a href="/register" class="text-sm text-green-600 hover:underline">Register</a>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>