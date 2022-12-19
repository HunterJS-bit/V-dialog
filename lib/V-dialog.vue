<script setup lang="ts">
import dialogPolyfill from "dialog-polyfill";
import { ref, onMounted, watch, withDefaults } from "vue";

import type { VDialog, DialogElement } from "./types";

const props = withDefaults(defineProps(), {
  open: false,
  isDialog: false,
  scrollable: false,
  blur: false,
  contentClass: null,
  fullscreen: false,
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
    :class="{ 'full-screen': fullscreen }"
    ref="dialogEl"
    @click="onClick"
    @cancel="onCancel"
    @close="onClose"
  >
    <div class="v-dialog-content" :class="contentClass">
      <slot> </slot>
    </div>
  </dialog>
</template>

<style scoped>
body.modal-open.overflowed {
  overflow: hidden;
}

dialog.v-dialog.full-screen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}

dialog.v-dialog {
  border: none;
  border-radius: 8px;
  -webkit-box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
  -moz-box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
  box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
  box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
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
  /* backdrop-filter: blur(3px); */
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
  /* backdrop-filter: blur(3px); */
}
.v-dialog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>