<script setup lang="ts">
import ModalComponent from "@/shared/FileUpload/ModalComponent.vue";
import {ref} from "vue";
import {Order} from "@/types/Order.ts";

const showDialog = ref(false);
const dialogContent = ref<Order>();

</script>

<template>
  <ModalComponent
      :content="dialogContent"
      @update:visible="showDialog= $event"
      :visible="showDialog">
    <template #header>
      <h5 class="text-xl font-bold">Order Details</h5>
    </template>
    <template #default="{ content }">
      <p>Order Number: {{ content?.id }}</p>
      <p>Order Date: {{ content?.orderDate }}</p>
      <p>Customer Name: {{ content?.customerName }}</p>
      <DataTable
          :value="content?.orderDetails"
          tableStyle="min-width: 30rem">
        <Column field="productName" header="Product Name"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="qty" header="Qty"></Column>
      </DataTable>
      <p>Status: {{ content?.paymentResponse.transactionStatus }}</p>
    </template>
  </ModalComponent>
</template>

<style scoped>

</style>