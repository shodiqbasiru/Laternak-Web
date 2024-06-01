<script setup lang="ts">
import {ref} from "vue";
import {Product} from "@/types/Product.ts";
import ProductDetailComponent from "@pages/Dashboard/DashboardProduct/components/ProductDetailComponent.vue";

const showDialog = ref(false);
const dialogContent = ref<Product>();
const emit = defineEmits(['addProduct','deleteProduct','updateProduct']);
const props = defineProps<{
  products: Array<Product>;
  imageBaseUrl: string;
}>();

const handleDetail = (data: Product) => {
  dialogContent.value = data;
  showDialog.value = true;
}

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
          <Button icon="pi pi-search" class="bg-amber-500 border-0"/>
        </InputGroup>
      </div>

      <DataTable
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          :value="props.products"
          tableStyle="min-width: 50rem">
        <Column field="productName" header="Product Name"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="stock" header="Stock"></Column>
        <Column field="images" header="Images">
          <template #body="slotProps">
            <img v-if="slotProps.data.images.length > 0" :src="props.imageBaseUrl + slotProps.data.images[0].url"
                 :alt="slotProps.data.images[0].name" class="w-40 h-40 object-cover rounded-lg">
          </template>
        </Column>
        <Column field="actions" header="Actions">
          <template #body="slotProps">
            <Button
                size="small"
                aria-label="Edit"
                @click="emit('updateProduct', slotProps.data)"
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
                @click="emit('deleteProduct', slotProps.data.id)"
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

  <ConfirmDialog group="headless" class="bg-gray-200 p-8" style="width: 30rem">
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-900 rounded-md">
        <div
            class="rounded-full text-white dark:text-surface-950 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-8">
          <i class="pi pi-question text-5xl"></i>
        </div>
        <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
        <p class="mb-0">{{ message.message }}</p>
        <div class="flex items-center gap-2 mt-4">
          <Button label="Save" @click="acceptCallback"></Button>
          <Button label="Cancel" outlined @click="rejectCallback" severity="danger"></Button>
        </div>
      </div>
    </template>
  </ConfirmDialog>
</template>

<style scoped>
</style>