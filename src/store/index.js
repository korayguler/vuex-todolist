import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    doneTodo(state, id) {
      state.todos.forEach((e) => {
        if (e.id == id) e.done = true;
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', todo);
    },
    doneTodo({ commit }, id) {
      commit('doneTodo', id);
    },
    removeTodo({ commit }, id) {
      commit('removeTodo', id);
    },
  },
  modules: {},
  getters: {
    getCompleted(state) {
      return state.todos.filter((todo) => todo.done == false);
    },
    getNotCompleted(state) {
      return state.todos.filter((todo) => todo.done == true);
    },
  },
});
