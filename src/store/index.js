import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    initApp(state, todos) {
      state.todos = todos;
    },
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
    initApp({ commit }, todos) {
      commit('initApp', todos);
    },
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
      return state.todos.filter((todo) => todo.done == true);
    },
    getNotCompleted(state) {
      return state.todos.filter((todo) => todo.done == false);
    },
  },
});
