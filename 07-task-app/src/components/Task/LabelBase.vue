<template>
  <div>
    <h2>
      <slot name="title"></slot>
    </h2>
    <ul>
      <li v-for="label in labels" :key="label.id">
        <slot name="item" :item="label"></slot>
      </li>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["labels"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
</style>


