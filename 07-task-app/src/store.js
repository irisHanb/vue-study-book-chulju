import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //=== task
    todos: [
      {
        id: 1,
        text: '우유사기',
        labelIds: [1, 3],
        done: false
      },
      {
        id: 2,
        text: 'Vue.js 관련 책 사기',
        labelIds: [2, 1],
        done: true
      }
    ],
    nextTaskId: 3,

    //=== label
    labels: [
      { id: 1, text: '쇼핑' },
      { id: 2, text: '공부' },
      { id: 3, text: '기타' }
    ],
    labelText: '',
    nextTagId: 4,

    //=== filter
    filterList: []
  },
  getters: {
    labelNames: state => lableIds => {
      let labels = [];
      lableIds.forEach(id => {
        let info = state.labels.find(el => el.id === id);
        labels.push(info.text);
      });
      return labels;
    },
    currentList(state) {
      // let resultList = [];
      // if (state.filterList.length > 0) {
      //   resultList = state.todos.filter(todo => todo.id === state.filterId);
      // } else {
      //   resultList = state.todos;
      // }
      // // state.filterList = [];
      // return resultList;
      return state.todos;
    }
  },
  mutations: {
    addTodo(state, { text, labelIds }) {
      state.todos.push({
        id: state.nextTaskId++,
        text,
        labelIds,
        done: false
      });
    },
    toggleTaskStatus(state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });
    },
    updateFilterId(state, list) {
      state.filterList = [...list];
    },

    // tags
    addTag(state, text) {
      state.labels.push({ id: state.nextTagId++, text });
      state.labelText = '';
    },
    updateLabelIds(state, list) {
      state.checkedLabelIds = [...list];
    }
  },
  actions: {}
});
