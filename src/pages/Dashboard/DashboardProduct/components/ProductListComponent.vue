<script setup lang="ts">

import {useProducts} from "@composables/useProducts.ts";
import {onMounted, ref} from "vue";
import {Product} from "@/types/Product.ts";
import ProductDetailComponent from "@pages/Dashboard/DashboardProduct/components/ProductDetailComponent.vue";

const searchParam = ref('');
const showDialog = ref(false);
const dialogContent = ref<Product>();

const {products, imageBaseUrl, getAllData} = useProducts();
onMounted(async () => {
  await getAllData(searchParam.value, 0, 0);
});

const handleAction = (data: any) => {
  console.log(data);
}

const handleDetail = (data: Product) => {
  dialogContent.value = data;
  showDialog.value = true;
}

const emit = defineEmits(['addProduct']);

</script>

<template>
  <Card>
    <template #title>List Of Products</template>
    <template #content>
      <div class="flex justify-between items-center">
        <Button
            class="mb-4 bg-amber-500 border-0"
            label="Add Product"
            icon="pi pi-plus"
            iconPos="left"
            @click="emit('addProduct')"/>
        <InputGroup class="w-full sm:w-1/2 md:w-1/4 p-3">
          <InputText placeholder="Search Product" :maxlength="20" class=" rounded-s-lg border mt-4 md:mt-0"/>
          <Button icon="pi pi-search" class="bg-amber-500 border-0" />
        </InputGroup>
      </div>

      <DataTable
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          :value="products"
          tableStyle="min-width: 50rem">
        <Column field="productName" header="Product Name"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="stock" header="Stock"></Column>
        <Column field="images" header="Images">
          <template #body="slotProps">
            <img v-if="slotProps.data.images.length > 0" :src="imageBaseUrl + slotProps.data.images[0].url"
                 :alt="slotProps.data.images[0].name" class="w-40 h-40 object-cover rounded-lg">
          </template>
        </Column>
        <Column field="actions" header="Actions">
          <template #body="slotProps">
            <Button
                size="small"
                aria-label="Edit"
                @click="handleAction(slotProps.data)"
                icon="pi pi-pencil"
                severity="warning"
                outlined/>
            <Button
                class="mx-2"
                size="small"
                aria-label="Detail"
                @click="handleDetail(slotProps.data)"
                icon="pi pi-eye" severity="info"
                outlined/>
            <Button
                size="small"
                aria-label="Delete"
                @click="handleAction(slotProps.data)"
                icon="pi pi-trash"
                severity="danger"
                outlined/>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
  <ProductDetailComponent
      :content="dialogContent"
      @update:visible="showDialog= $event"
      :visible="showDialog"/>
</template>

<style scoped>
</style>