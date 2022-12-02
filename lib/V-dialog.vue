<script setup lang="ts">
import dialogPolyfill from "dialog-polyfill";
import {
  ref,
  onMounted,
  defineProps,
  watch,
  defineEmits,
  withDefaults,
} from "vue";

import type { VDialog, DialogElement } from "./types";

const props = withDefaults(defineProps<VDialog>(), {
  open: false,
  isModal: false,
});

const emits = defineEmits<{
  (e: "cancel", event: Event): void;
  (e: "close", event: Event): void;
}>();

const dialogEl = ref<DialogElement | null>(null);

onMounted(() => {
  if (dialogEl?.value && !(typeof dialogEl.value?.showModal === "function")) {
    dialogEl.value && dialogPolyfill.registerDialog(dialogEl.value);
  }
});

watch(
  () => props.open,
  (newValue) => {
    newValue
      ? props.isModal
        ? dialogEl?.value?.showModal()
        : dialogEl?.value?.show()
      : dialogEl?.value?.close();
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
  <dialog class="v-dialog" ref="dialogEl" @cancel="onCancel" @close="onClose">
    <div class="v-dialog-content">
      <slot> </slot>
    </div>
  </dialog>
</template>

<style scoped>
body:has(dialog[open]) {
  overflow: hidden;
}

dialog.v-dialog {
  padding: 0;
  border: 0;
  border-radius: 0.6rem;
  box-shadow: 0 0 1em black;
}

dialog.v-dialog::backdrop {
  /* make the backdrop a semi-transparent black */
  background-color: rgba(0, 0, 0, 0.4);
}
/* dialog polyfill backdrop support **/
dialog + .backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}
.v-dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>