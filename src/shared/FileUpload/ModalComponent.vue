<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';
import Dialog from 'primevue/dialog';

defineProps({
  content: Object,
  visible: Boolean
});

const emit = defineEmits(['update:visible']);

</script>

<template>
  <Dialog
      :visible="visible"
      position="center"
      :draggable="false"
      modal
      :contentStyle="{width: '50rem'}"
      @update:visible="emit('update:visible', false)">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #default>
      <slot :content="content"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </Dialog>
</template>
