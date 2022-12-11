# v-dialog

## Overview

Vue dialog is a simplest way to create dialog or modal window on your site.

- Be lightweight, powerful and easy to use
- Mobile friendly
- Compatible with Vue 1, 2 or 3.x.

## Requirements
Vue.js 1.x, 2.x or 3.x


## Installation

```
npm i -s v-dialog
```

<p></p>

```
yarn add v-dialog
```

## Demos

## Usage

Vue 2 usage

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

Vue 3 usage

```vue 
<script setup lang="ts">
import Vdialog from 'v-dialog';
import { ref } from "vue";
const isVisible = ref(false);

function toggle() {
  isVisible.value = !isVisible.value;
}

</script>


<template>
  <VDialog
    :open={modal}
  >
    <p>Your content</p>
  </VDialog>;
  <button @click="toggleDialog">toggle dialog</button>
  </template>
```


## Options

| Prop Name | Values |
| ------ | ------ |
| open | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


## Changelog

Details changes for each release are documented in the [release notes](https://github.com/HunterJS-bit/V-dialog/releases).

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/HunterJS-bit/V-dialog//issues) or a [pull request](https://github.com/HunterJS-bit/V-dialog/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)