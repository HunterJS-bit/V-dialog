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

Import into your component:

```javascript
import { VDialog } from "v-dialog";

export default {
  // ...
  components: {
    VDialog
  }
}
```

### Single file component
<br>

```vue
<template>
  <v-dialog open=>
  </v-dialog>
</template>

<script>
// ...
</script>

<style>
:root {
  --bg: #fff;
  --color: #333333;
}

html.dark-mode {
  --bg: #232b32;
  --color: #ddd8ca;
}

body {
  background-color: var(--bg);
  color: var(--color);
}
</style>
```