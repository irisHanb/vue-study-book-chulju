<template>
  <div>
    <h2>Label List</h2>
    <!-- add -->
    <form @submit.prevent="applyAddLabel">
      <input type="text" name id v-model="text" />
      <button>add label</button>
    </form>
    <!-- list -->
    <ul class="label-list">
      <li v-for="label in labels" :key="label.id" class="label">
        <input type="checkbox" :value="label.id" v-model="checkedIds" />
        {{label.text}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      textSaved: ""
    };
  },
  computed: {
    ...mapState(["labelText", "labels", "checkedLabelIds"]),
    text: {
      get() {
        return this.labelText;
      },
      set(val) {
        this.textSaved = val;
      }
    },
    checkedIds: {
      get() {
        return this.checkedLabelIds;
      },
      set(val) {
        this.updateLabelIds(val);
      }
    }
  },
  methods: {
    ...mapMutations(["addLabel", "updateLabelIds"]),
    applyAddLabel() {
      this.addLabel(this.text2);
      this.text = "";
      this.textSaved = "";
      this.checkedLabels = [];
    }
  }
};
</script>
<style lang="scss">
</style>


