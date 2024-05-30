<script setup lang="ts">
import {useOrders} from "@composables/useOrders.ts";
import {ref} from "vue";
import {Order} from "@/types/Order.ts";
import OrderDetaillComponent from "@pages/Dashboard/DashboardOrder/components/OrderDetaillComponent.vue";

const {data: {orders}, totalPrice} = useOrders();
const showDialog = ref(false);
const dialogContent = ref<Order>();

const handleAction = (data: Order) => {
  dialogContent.value = data;
  showDialog.value = true;
}
</script>

<template>
  <div>
    <DataTable
        paginator
        :rows="5"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        :value="orders?.data"
        tableStyle="min-width: 50rem">
      <Column field="id" header="Order Number"></Column>
      <Column field="orderDate" header="Date"></Column>
      <Column field="customerName" header="Customer Name"></Column>
      <Column field="paymentResponse.transactionStatus" header="Status"></Column>
      <Column :field="totalPrice" header="Total Price"></Column>
      <Column field="actions" header="Actions">
        <template #body="slotProps">
          <Button
              class="mx-2"
              size="small"
              aria-label="Detail"
              @click="handleAction(slotProps.data)"
              icon="pi pi-eye" severity="info"
              outlined/>
        </template>
      </Column>
    </DataTable>
   <OrderDetaillComponent
       :content="dialogContent"
       @update:visible="showDialog= $event"
       :visible="showDialog"/>
  </div>
</template>