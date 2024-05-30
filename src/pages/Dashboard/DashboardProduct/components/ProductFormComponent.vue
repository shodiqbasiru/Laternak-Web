<script setup lang="ts">
import {reactive, ref} from "vue";
import {FormProduct} from "@/types/FormProduct.ts";
import {FileUploadSelectEvent} from "primevue/fileupload";
import {useProducts} from "@composables/useProducts.ts";
import {useToast} from "primevue/usetoast";

const {postProduct, getAllData} = useProducts();
const visible = ref(false);
const form = reactive<FormProduct>({
  productName: '',
  price: 0,
  stock: 0,
  description: '',
  storeId: "",
  images: []
});

const searchParam = ref('');
const toast = useToast();

const onUpload = (event: FileUploadSelectEvent) => {
  form.images.push(...event.files);
}

const clearForm = () => {
  form.productName = '';
  form.price = 0;
  form.stock = 0;
  form.description = '';
  form.images = [];
}

const emit = defineEmits(['update:visible','productAdded'])

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  form.storeId = localStorage.getItem('storeId') || "";

  const formData = new FormData();
  const product = {
    productName: form.productName,
    price: form.price,
    stock: form.stock,
    description: form.description,
    storeId: form.storeId
  }

  formData.append('product', JSON.stringify(product));
  form.images.map((image) => formData.append('image', image));

  try {
    const response = await postProduct(formData);
    if (response.statusCode === 201) {
      clearForm();
      toast.add({severity: 'success', summary: 'Success', detail: 'Product added successfully', life: 3000});
      emit('update:visible', false);
      emit('productAdded');
    }
  } catch (e) {
    console.log(e, 'error');
  }
}


</script>

<template>
  <Dialog v-model:visible="visible" modal header="Add a New Product"
          :style="{ width: '50rem' }">
    <form @submit.prevent="handleSubmit" class="w-full">
      <div class="mb-3">
        <label for="images" class="font-semibold">Upload</label>
        <FileUpload
            name="demo[]"
            v-model="form.images"
            @select="onUpload"
            :showUploadButton="false"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000">
          <template #empty>
            <p>Drag and drop files to here to upload.</p>
          </template>
        </FileUpload>
      </div>
      <div>
        <div class="flex flex-col mb-3">
          <label for="product-name" class="font-semibold">Product Name</label>
          <InputText id="product-name" v-model="form.productName" class="flex-auto" autocomplete="off"/>
        </div>
        <div class="flex flex-col mb-3">
          <label for="price" class="font-semibold">Price</label>
          <InputNumber id="price" v-model="form.price" class="flex-auto" autocomplete="off"/>
        </div>
        <div class="flex flex-col mb-3">
          <label for="stock" class="font-semibold">Stock</label>
          <InputNumber id="stock" v-model="form.stock" class="flex-auto" autocomplete="off"/>
        </div>
        <div class="flex flex-col mb-3">
          <label for="description" class="font-semibold">Description</label>
          <InputText id="description" v-model="form.description" class="flex-auto" autocomplete="off"/>
        </div>
        <div class="flex justify-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="$emit('update:visible', false)"></Button>
          <Button type="submit" label="Save"></Button>
        </div>
      </div>

    </form>
  </Dialog>
</template>

<style scoped>

</style>