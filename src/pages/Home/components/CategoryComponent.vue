<script setup lang="ts">
import CardImageOne from "@assets/card-sapi.png"
import CardImageTwo from "@assets/card-ayam.png"
import CardImageThree from "@assets/card-kambing.png"
import CardImageFour from "@assets/card-bebek.png"


</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-200 py-14 px-5">
    <div class="flex justify-evenly items-center bg-gradient-to-r from-green-600 to-green-400 p-5 shadow-lg rounded-lg flex-wrap">
      <img :src="CardImageOne" alt="" class="card-img w-full h-full object-cover">
      <div class="">
        <h2 class="text-2xl font-bold text-white">Cattle</h2>
        <p class="text-gray-200">Find your cattle here</p>
      </div>
    </div>
    <div class="flex justify-evenly items-center bg-gradient-to-r from-amber-400 to-amber-700 p-5 shadow-lg rounded-lg flex-wrap">
      <img :src="CardImageTwo" alt="" class="card-img w-full h-full object-cover">
      <div class="">
        <h2 class="text-2xl font-bold text-white">Chicken</h2>
        <p class="text-gray-200">Find your chicken here</p>
      </div>
    </div>
    <div class="flex justify-evenly items-center bg-gradient-to-r from-green-600 to-green-400 p-5 shadow-lg rounded-lg flex-wrap">
      <img :src="CardImageThree" alt="" class="card-img w-full h-full object-cover">
      <div class="">
        <h2 class="text-2xl font-bold text-white">Goat</h2>
        <p class="text-gray-200">Find your goat here</p>
      </div>
    </div>
    <div class="flex justify-evenly items-center bg-gradient-to-r from-amber-400 to-amber-700 p-5 shadow-lg rounded-lg flex-wrap">
      <img :src="CardImageFour" alt="" class="card-img w-full h-full object-cover">
      <div class="">
        <h2 class="text-2xl font-bold text-white">Duck</h2>
        <p class="text-gray-200">Find your duck here</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img {
  width: 200px;
  height: 200px;

}

</style>