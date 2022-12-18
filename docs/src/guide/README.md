# Setup

## Installation
Add `@v-dialog` in your Vue project.

### NPM
```shell
npm install -S v-dialog
```

### Yarn
```shell
yarn add v-dialog
```

## Usage


### Single file component
<br>

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
</style>
```