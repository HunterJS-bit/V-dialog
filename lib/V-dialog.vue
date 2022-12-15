<script setup lang="ts">
import dialogPolyfill from "dialog-polyfill";
import { ref, onMounted, watch, withDefaults } from "vue";

import type { VDialog, DialogElement } from "./types";

const props = withDefaults(defineProps<VDialog>(), {
  open: false,
  isDialog: false,
  scrollable: false,
});

const emits = defineEmits<{
  (e: "cancel", event: Event): void;
  (e: "close", event: Event): void;
  (e: "click", event: Event): void;
  (e: "outside-click", event: Event): void;
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
      ? !props.isDialog
        ? showModal()
        : dialogEl?.value?.show()
      : closeModal();
  }
);

const showModal = () => {
  if (!props.scrollable) {
    document.body.classList.add("modal-open", "overflowed");
  }
  dialogEl?.value?.showModal();
};

const closeModal = () => {
  if (!props.scrollable) {
    document.body.classList.remove("modal-open", "overflowed");
  }
  dialogEl?.value?.close();
};

const onCancel = (e: Event) => {
  e.preventDefault();
  emits("cancel", e);
};

const onClose = (e: Event) => {
  emits("close", e);
};

const onClick = (event: MouseEvent) => {
  const rect = dialogEl && dialogEl.value?.getBoundingClientRect();
  if (rect) {
    const isInsideDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    isInsideDialog ? emits("click", event) : emits("outside-click", event);
  }
};
</script>


<template>
  <dialog
    class="v-dialog"
    ref="dialogEl"
    @click="onClick"
    @cancel="onCancel"
    @close="onClose"
  >
    <div class="v-dialog-content">
      <slot> </slot>
    </div>
  </dialog>
</template>

<style scoped>
body.modal-open.overflowed {
  overflow: hidden;
}

dialog.v-dialog {
  border: none;
  border-radius: calc(5px * var(--ratio));
  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  padding: 1.6rem;
  max-width: 600px;
}

dialog.v-dialog::backdrop {
  /* make the backdrop a semi-transparent black */
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  opacity: 1;
  transition: all 0.3s ease;
  outline: 0;
}
/* dialog polyfill backdrop support **/
dialog + .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: 1;
  transition: all 0.3s ease;
  outline: 0;
}
.v-dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>