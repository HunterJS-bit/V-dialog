<template>
  <div>
    <p class="demo">
      {{ msg }}
    </p>
    <button @click="onToggle">Toggle dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello this is <demo-component>",
      open: false,
    };
  },
  methods: {
    onToggle() {
      console.log("On toggle");
    },
  },
};
</script>
