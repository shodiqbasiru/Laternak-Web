<script setup lang="ts">
import ProductListComponent from "@pages/Dashboard/DashboardProduct/components/ProductListComponent.vue";
import ProductFormComponent from "@pages/Dashboard/DashboardProduct/components/ProductFormComponent.vue";
import {onMounted, ref} from "vue";
import {useProducts} from "@composables/useProducts.ts";

const showDialog = ref(false);
const searchParam = ref('');

const {products, imageBaseUrl, getAllData} = useProducts();

const onCreated = async () => {
  await getAllData(searchParam.value,0,0);
}
onCreated()

const refreshData = async () => {
  await getAllData(searchParam.value, 0, 0);
}
</script>

<template>
  <ProductListComponent @addProduct="showDialog = true" :products="products" :imageBaseUrl="imageBaseUrl"/>
  <ProductFormComponent :visible="showDialog" @update:visible="showDialog = $event" @productAdded="refreshData"/>
</template>

<style scoped>

</style>