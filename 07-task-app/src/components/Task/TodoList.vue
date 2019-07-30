<template>
  <div class>
    <h2 class>Todo List</h2>
    <ul class="todo-list">
      <li class="todo-item" v-for="todo in todoList" :key="todo.id">
        <div class="item-contents">
          <input type="checkbox" />
          <span>{{todo.text}}</span>
        </div>
        <ul class="item-tags">
          <li
            class="item-tags__item"
            v-for="tagId in todo.labelIds"
            :key="tagId"
          >{{tagList[tagId-1].text}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  props: ["todoList", "tagList"],
  data() {
    return {
      todoName: "",
      label: "",
      checkedLabels: []
    };
  },
  mounted() {
    // this.$refs.inputTask.focus();
  },
  computed: {
    ...mapState(["tasks", "labels"]),
    ...mapGetters(["labelNames"])
  },
  methods: {
    ...mapMutations(["addTask", "toggleTaskStatus", "addLabel"]),
    commitAddTask() {
      this.addTask(this.todoName);
      this.todoName = "";
      // this.$refs.inputTask.focus();
    }
  }
};
</script>
<style lang="scss">
.todo {
  &-list {
    width: 600px;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 0.5em;
    padding-bottom: 0.3em;
    border-bottom: 1px dotted #bdc3c7;

    .item {
      &-tags {
        &__item {
          display: inline-block;
          font-size: 0.8rem;
          padding: 0.3em 0.5em;
          background: #bdc3c7;
          color: #fff;
          border-radius: 0.3em;
          margin-left: 0.3em;
        }
      }
    }
  }
}
</style>
