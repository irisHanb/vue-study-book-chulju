<template>
  <div class="task-comp">
    <TodoAdd :tagList="labels"></TodoAdd>
    <todoList :todoList="currentList" :tagList="labels"></todoList>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

import LabelList from "./LabelList";
import LabelBase from "./LabelBase";

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    TodoAdd,
    TodoList,
    LabelList,
    LabelBase
  },
  data() {
    return {
      checked: null
      // selectedFilter: null
    };
  },

  computed: {
    ...mapState(["todos", "labels", "filterList"]),
    ...mapGetters(["currentList"]),
    selectedFilter: {
      get() {
        return this.filterList;
      },
      set(val) {
        this.updateFilterId(val);
      }
    }
  },
  methods: {
    ...mapMutations(["updateFilterId"])
  }
};
</script>
<style lang="scss">
</style>



