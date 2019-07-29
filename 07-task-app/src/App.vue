<template>
  <div id="app">
    <TaskList></TaskList>
    <LabelList></LabelList>
    <LabelBase :filters="labels">
      <template v-slot:title>Filter</template>
      <template v-slot:item>name</template>
    </LabelBase>
  </div>
</template>


<script>
import { mapState } from "vuex";
import TaskList from "./components/TaskList";
import LabelList from "./components/LabelList";
import LabelBase from "./components/LabelBase";

export default {
  components: {
    TaskList,
    LabelList,
    LabelBase
  },
  computed: {
    ...mapState(["labels"])
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
}
h2 {
  margin-top: 2em;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
