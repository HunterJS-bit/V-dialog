# v-dialog

Vue dialog is a simplest way to create dialog or modal window on your site.

- Very small (less than 4Kb)
- Mobile friendly
- Without dependencies

## Demo

https://memcrab.github.io/react-pure-modal/

## Installation

`npm i v-dialog --save
 yarn add v-dialog

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


## Changelog (latest on top)