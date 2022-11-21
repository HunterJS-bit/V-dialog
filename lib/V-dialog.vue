<script setup lang="ts">
import dialogPolyfill from "dialog-polyfill";
import { ref, onMounted, toRefs, defineProps } from "vue";

interface VDialogProps {
  open: boolean;
}

const dialogEl = ref<HTMLDialogElement | null>(null);

const { open } = defineProps<VDialogProps>();

const emit = defineEmits(["cancel", "close"]);

onMounted(() => {
  if (dialogEl.value && typeof dialogEl.value?.showModal === "function") {
    dialogPolyfill.registerDialog(dialogEl);
  }
});

const onClose = () => {
  console.log("on close");
};
</script>

<template>
  <dialog :open="open" ref="el" onCancel="onClose" onClose="onClose">
    <slot> </slot>
  </dialog>
</template>

<style scoped>
</style>