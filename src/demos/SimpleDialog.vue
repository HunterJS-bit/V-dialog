<script setup lang="ts">
import Vdialog from "../../lib/V-dialog.vue";
import { ref } from "vue";
const isVisible = ref(false);

function toggleDialog() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div>
    <v-dialog :open="isVisible">
      <p>Greetings, one and all!</p>
    </v-dialog>
    <button @click="toggleDialog">show dialog</button>
  </div>
</template>
