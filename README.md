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

```vue
import VDialog from 'v-dialog';
const [modal, setModal] = useState(false);

<VDialog
  :open={modal}
  onClose={() => {
    setModal(false);
  }}
>
  <p>Your content</p>
</VDialog>;
```


## Options

#### open `boolean` (default: false)

Control modal state from parent component


## Changelog

Details changes for each release are documented in the [release notes](https://github.com/HunterJS-bit/V-dialog/releases).

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/HunterJS-bit/V-dialog//issues) or a [pull request](https://github.com/HunterJS-bit/V-dialog/pulls).

## License

[MIT](http://opensource.org/licenses/MIT)