<template>
  <div class="todo-add">
    <h2>할일을 입력하세요.</h2>
    <form>
      <p>
        <input type="text" v-model="text" />
      </p>
      <transition
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutDown"
      >
        <div class="tag-section" v-if="text.trim()!=''">
          <p class="info">select tags or add tag and then select tags</p>
          <input type="text" v-model="tagName" />
          <button type="button" @click="applyAddTag">add tag</button>
          <ul>
            <li class="tag" v-for="tag in tagList" :key="tag.id">
              <label :for="tag.id">
                <input type="checkbox" :value="tag.id" :id="tag.id" :name="tag.id" v-model="tags" />
                {{tag.text}}
              </label>
            </li>
          </ul>
        </div>
      </transition>

      <button v-if="existTags" type="button" @click.prevent="applyAddTodo">add todo</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: ["tagList"],
  data() {
    return {
      text: "",
      tagName: "",
      tags: []
    };
  },
  watch: {},
  computed: {
    existTags() {
      return this.text.trim() != "" && this.tags.length > 0;
    }
  },
  methods: {
    ...mapMutations(["addTodo", "addTag"]),
    applyAddTodo() {
      console.log(this.tags);
      if (this.tags.length <= 0) {
        alert("tag를 선택해 주세요.");
        return;
      }
      this.addTodo({ text: this.text, labelIds: this.tags });
      this.text = "";
      this.tags = [];
    },
    applyAddTag() {
      this.addTag(this.tagName);
      this.tagName = "";
    }
  }
};
</script>
<style lang="scss">
</style>


