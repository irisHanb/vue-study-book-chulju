var counterBtn = Vue.extend({
  template: "<span>{{counter}}개 <button>추가</button></span>",
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    addCart: function() {
      this.counter++;
      this.$emit("add", { num: this.counter, name: "hanb" });
    },
    do: function() {
      console.log("click do");
    }
  }
});
