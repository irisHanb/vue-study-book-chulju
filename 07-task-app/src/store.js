import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '우유사기',
        labelIds: [1, 3],
        done: false
      },
      {
        id: 2,
        name: 'Vue.js 관련 책 사기',
        labelIds: [2, 1],
        done: true
      }
    ],
    nextTaskId: 3,
    labels: [
      { id: 1, text: '쇼핑' },
      { id: 2, text: '공부' },
      { id: 3, text: '기타' }
    ],
    labelText: '',
    nextLabelId: 4,
    checkedLabelIds: []
  },
  getters: {
    labelNames: state => lableIds => {
      let labels = [];
      lableIds.forEach(id => {
        let info = state.labels.find(el => el.id === id);
        labels.push(info.text);
      });
      return labels;
    }
  },
  mutations: {
    addTask(state, name) {
      state.tasks.push({
        id: state.nextTaskId++,
        labelIds: state.checkedLabelIds,
        name,
        done: false
      });
      state.checkedLabelIds = [];
    },

    toggleTaskStatus(state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });
    },
    // labels
    addLabel(state, text) {
      state.labels.push({ id: state.nextLabelId++, text });
      state.labelText = '';
    },
    updateLabelIds(state, list) {
      state.checkedLabelIds = [...list];
    }
  },
  actions: {}
});
