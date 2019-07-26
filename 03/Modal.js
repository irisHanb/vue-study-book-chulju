var Modal = Vue.extend({
  template:
    "<div class='modal' v-if='visible' @click.self='close'>Modal <button @click='close'>X</button></div>",
  props: ["visible"],
  data: function() {},
  methods: {
    close: function() {
      this.$emit("update:visible", false);
    }
  }
});
