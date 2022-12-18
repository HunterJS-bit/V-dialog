<script setup lang="ts">
import Vdialog from "../lib/V-dialog.vue";
import { ref } from "vue";
const isVisible = ref(false);

function toggle() {
  isVisible.value = !isVisible.value;
}

const onCancel = () => {
  console.log("Dialog Canceled");
};

const onClose = () => {
  console.log("Dialog Closed");
};

const onDialogClick = () => {
  console.log("Dialog clicked");
};
</script>

<template>
  <div>
    <Vdialog
      :open="isVisible"
      :fullscreen="true"
      class="marko"
      @cancel="onCancel"
      @close="onClose"
      @click="onDialogClick"
    >
      <p>Some important content</p>
      <button @click="toggle">Open</button>
      <button @click="toggle">Close</button>
    </Vdialog>
    <button @click="toggle">show dialog</button>
  </div>
</template>

<style scoped>
</style>
