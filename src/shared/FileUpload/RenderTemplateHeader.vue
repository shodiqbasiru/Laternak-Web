<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  type: String,
  onUpload: Function,
});
</script>

<template>
  <div>
    <div v-if="type === 'header'" class="p-fileupload-buttonbar">
      <span class="p-button p-component p-button-text-icon-left p-fileupload-choose">
        <span class="p-button-icon-left pi pi-plus"></span>
        <span class="p-button-label">Choose</span>
        <input type="file" multiple @change="onUpload">
      </span>
      <button type="button" class="p-button p-component p-button-text-icon-left p-fileupload-cancel">
        <span class="p-button-icon-left pi pi-times"></span>
        <span class="p-button-label">Cancel</span>
      </button>
    </div>
    <p v-else-if="type === 'empty'">Drag and drop files to here to upload.</p>
  </div>
</template>
