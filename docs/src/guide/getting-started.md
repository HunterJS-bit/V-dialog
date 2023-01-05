# Getting Started


## Prerequisites

- [Vue](https://vuejs.org/)



## Manual Installation


- **Step 1**: Install package

#####  NPM
```shell
npm install -S v-dialog
```

##### Yarn
```shell
yarn add v-dialog
```


- **Step 2**: Import it and use it in your project

```vue

<template>
  <div>
    <v-dialog open="open"></v-dialog>
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


Please check our [Examples section](./examples.md) for more usages of the dialog
