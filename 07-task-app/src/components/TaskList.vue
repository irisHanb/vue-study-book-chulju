<template>
  <div class="tasks">
    <h2 class="tasks__title">Task List</h2>
    <form @submit.prevent="commitAddTask">
      <input type="text" name id v-model="todoName" ref="inputTask" />
      <button>add task</button>
    </form>
    <ul>
      <li v-for="(task, taskIdx) in tasks" :key="task.id" class="task">
        <div class="task__texts">
          <input type="checkbox" :checked="task.done" @change="toggleTaskStatus(task.id)" />
          <span>{{task.name}}</span>
        </div>
        <div class="task__labels">
          <span
            class="task__label"
            v-for="labelName in labelNames(task.labelIds)"
            :key="labelName"
          >{{labelName}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      todoName: "",
      label: "",
      checkedLabels: []
    };
  },
  mounted() {
    this.$refs.inputTask.focus();
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
      this.$refs.inputTask.focus();
    }
  }
};
</script>
<style lang="scss">
ul {
  margin: 0;
  padding: 0;
}
.tasks {
  text-align: left;
}
.task {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 1em 0em;
  padding: 0;
  padding-bottom: 0.3em;
  border-bottom: 1px dotted #b2bec3;

  &__texts {
    margin-right: 1em;
  }

  &__labels {
    display: flex;
    align-items: center;
  }
  &__label {
    font-size: 0.7rem;
    background-color: #b2bec3;
    color: #fff;
    padding: 0.1em 0.5em;
    margin: 0 0.3em;
    border-radius: 0.7em;
  }

  & > div {
  }
}
</style>

