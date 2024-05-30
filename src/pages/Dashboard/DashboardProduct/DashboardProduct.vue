<script setup lang="ts">
import ProductListComponent from "@pages/Dashboard/DashboardProduct/components/ProductListComponent.vue";
import ProductFormComponent from "@pages/Dashboard/DashboardProduct/components/ProductFormComponent.vue";
import {ref} from "vue";
import {useProducts} from "@composables/useProducts.ts";

let showModal = ref(false);

const {getAllData} = useProducts();

const refreshProductList = async () => {
  await getAllData('', 0, 0);
}
</script>

<template>
  <ProductListComponent @addProduct="showModal = true"/>
  <ProductFormComponent v-model:visible="showModal" @productAdded="refreshProductList" />
</template>

<style scoped>

</style>