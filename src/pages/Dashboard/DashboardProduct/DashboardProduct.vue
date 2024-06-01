<script setup lang="ts">
import ProductListComponent from "@pages/Dashboard/DashboardProduct/components/ProductListComponent.vue";
import ProductFormComponent from "@pages/Dashboard/DashboardProduct/components/ProductFormComponent.vue";
import {ref} from "vue";
import {useProducts} from "@composables/useProducts.ts";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";
import {Product} from "@/types/Product.ts";

const showDialog = ref(false);
const searchParam = ref('');
const confirm = useConfirm();
const toast = useToast();
const {products, imageBaseUrl, getAllData,deleteProduct} = useProducts();
const editProduct = ref<Product>();

const onCreated = async () => {
  await getAllData(searchParam.value,0,0);
}
onCreated()

const handleDelete = (id: string) => {
  confirm.require({
    group: 'headless',
    header: 'Are you sure?',
    message: 'Please confirm to proceed.',
    accept: async () => {
      await deleteProduct(id);
      toast.add({severity: 'success', summary: 'Deleted', detail: 'Product deleted successfully', life: 3000});
    },
    reject: () => {
      toast.add({severity: 'error', summary: 'Rejected', detail: 'You are canceled the action', life: 3000})
    }
  });
};

const refreshData = async () => {
  await getAllData(searchParam.value, 0, 0);
}

const handleEdit = (data:Product) => {
  editProduct.value = data;
  showDialog.value = true;
}
</script>

<template>
  <ProductListComponent @addProduct="showDialog = true" :products="products" :imageBaseUrl="imageBaseUrl" @deleteProduct="handleDelete" @updateProduct="handleEdit"/>
  <ProductFormComponent :visible="showDialog" @update:visible="showDialog = $event" @productAdded="refreshData"/>
</template>

<style scoped>

</style>