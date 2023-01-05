# Examples



## Base Demo

### Vue 2 Usage

This is a simple demo usage with Vue 2

```vue
<template>
  <div>
    <v-dialog 
      :open="open">
      <div>
        <h1> I'm dialog content </h1>
      </div>
    </v-dialog>
     <div class="toggleContainer">
     <button @click="toggleDialog">
       Toggle display 
     </button> 
  </div>
</template>

<script>
import Vdialog from 'v-dialog';

export default {
  data() {
    return {
      open: false
    };
  },
  components: {
    vDialog: Vdialog
  },
  methods: {
    toggleDialog() {
      this.open = !this.open;
    }
  }
};
</script>
```

### Vue 3 Usage

Here is a simple demo usage with Vue 3 

```vue
<script setup lang="ts">
import Vdialog from "v-dialog";
import { ref } from "vue";
const isVisible = ref(false);

const toggle = () => {
  isVisible.value = !isVisible.value;
}

</script>

<template>
  <div>
    <Vdialog
      :open="isVisible"
      class="v-dialog"
    >
      <div>
        <h1> I'm dialog content </h1>
      </div>
    </Vdialog>
    <button @click="toggle">show dialog</button>
  </div>
</template>

```


## Advanced Usage

Will follow up...