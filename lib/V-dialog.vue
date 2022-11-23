<script setup lang="ts">
import dialogPolyfill from "dialog-polyfill";
import { ref, onMounted, defineProps, watch, defineEmits } from "vue";

interface VDialogProps {
  open: boolean;
}

interface DialogElement extends HTMLDialogElement {
  showModal: () => void;
  close: () => void;
}

const dialogEl = ref<DialogElement | null>(null);

const props = defineProps<VDialogProps>();

const emits = defineEmits<{
  (e: "cancel", event: Event): void;
  (e: "close", event: Event): void;
}>();

onMounted(() => {
  if (dialogEl.value && !(typeof dialogEl.value?.showModal === "function")) {
    dialogPolyfill.registerDialog(dialogEl.value);
  }
});

watch(
  () => props.open,
  (newValue) => {
    newValue ? dialogEl?.value?.showModal() : dialogEl?.value?.close();
  }
);

const onCancel = (e: Event) => {
  e.preventDefault();
  emits("cancel", e);
};

const onClose = (e: Event) => {
  emits("close", e);
};
</script>

<template>
  <dialog ref="dialogEl" @cancel="onCancel" @close="onClose">
    <slot> </slot>
  </dialog>
</template>

<style scoped>
</style>