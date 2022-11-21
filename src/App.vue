<script setup lang="ts">
import Vdialog from "../lib/V-dialog.vue";
import { ref } from "vue";
const isVisible = ref(false);

function increment() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div>
    <Vdialog :open="isVisible" class="marko">
      <p>Zdravoo markoooo</p>
    </Vdialog>

    <button @click="increment">show dialog</button>
  </div>
</template>

<style scoped>
</style>
