<script setup lang="ts">

import {ref} from "vue";
import {Product} from "@/types/Product.ts";
import ModalComponent from "@/shared/Modal/ModalComponent.vue";

const showDialog = ref(false);
const dialogContent = ref<Product>();

</script>

<template>
  <ModalComponent
      :content="dialogContent"
      @update:visible="showDialog= $event"
      :visible="showDialog">
    <template #header>
      <h5 class="text-xl font-bold">Product Details</h5>
    </template>
    <template #default="{ content }">
      <p>Product Name: {{ content?.productName }}</p>
      <p>Product Price: {{ content?.price }}</p>
      <p>Product Description: {{ content?.description }}</p>
    </template>
  </ModalComponent>
</template>
