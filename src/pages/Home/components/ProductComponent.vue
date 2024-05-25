<script setup lang="ts">
import {useProducts} from "../../../composables/useProducts.ts";
import {onMounted, ref} from "vue";

const searchParam = ref('');
const {products, imageBaseUrl, getData} = useProducts();

onMounted(async () => {
  await getData(searchParam.value, 0, 0);
})

const onEnter = async (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    await getData(searchParam.value, 0, 0);
  }
}

</script>

<template>
  <div class="mx-20 my-10 flex justify-between">
    <h1 class="text-2xl text-center font-bold">Our Best Products</h1>
    <input
        v-model="searchParam"
        v-on:keyup="onEnter"
        type="text"
        class="w-1/6 p-3 rounded-lg border"
        placeholder="Search Product">
  </div>
  <div class="grid grid-cols-5 gap-x-20 gap-y-10 justify-between mx-20">
    <div class="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden" v-for="product in products"
         :key="product.id">
      <div class="w-full">
        <img v-if="product.images.length > 0" :src="imageBaseUrl + product.images[0].url" :alt="product.images[0].name"
             class="w-full object-cover h-56">
        <div class="mt-5 p-3">
          <h1 class="text-xl font-bold">{{ product.productName }}</h1>
          <p class="text-sm text-gray-500">{{ product.price }}</p>
        </div>
      </div>
      <div class="mt-5 p-3 justify-end">
        <button class="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded">Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>

<!--.product {-->
<!--transition: transform 0.2s;-->
<!--}-->

<!--.product:hover {-->
<!--transform: translateY(-10px);-->
<!--}-->