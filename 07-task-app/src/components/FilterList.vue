<template>
  <div>
    <h2>
      <slot name="title"></slot>
    </h2>
    <ul>
      <slot name="item" :lables="labels" v-for="label in labels"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: [labels]
};
</script>
<style lang="scss">
</style>


