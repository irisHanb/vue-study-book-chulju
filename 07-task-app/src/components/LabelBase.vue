<template>
  <div :filters="labels">
    <h2>
      <slot name="title"></slot>
    </h2>
    <ul>
      <li v-for="item in labels">
        <slot name="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["filters"]
};
</script>
<style lang="scss">
</style>


