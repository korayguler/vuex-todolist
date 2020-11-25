<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="todolist not-done">
          <div class="todo-header">
            <strong
              ><span class="count-todos">{{
                getCompleted.length
              }}</span></strong
            >
            todo not completed
          </div>
          <h1>Todos</h1>
          <form @submit.prevent="addNewTodo">
            <input
              type="text"
              class="form-control add-todo"
              placeholder="Add todo....."
              v-model="title"
            />
            <button id="add" class="btn btn-success ">
              Add new todo
            </button>
          </form>
          <ul id="sortable" class="list-unstyled">
            <li
              class="ui-state-default"
              v-for="elem in getCompleted"
              :key="elem.id"
            >
              <div class="checkbox">
                <label> {{ elem.title }}</label>
                <button
                  class="remove-item btn btn-default btn-xs pull-right"
                  @click.prevent="doneTodoNow(elem.id)"
                >
                  <span class="glyphicon glyphicon-check"></span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="todolist">
          <div class="todo-header">
            <strong
              ><span class="count-todos">{{
                getNotCompleted.length
              }}</span></strong
            >
            completed
          </div>
          <h1>Already Done</h1>
          <ul id="done-items" class="list-unstyled">
            <li v-for="elem in getNotCompleted" :key="elem.id">
              {{ elem.title }}
              <button
                class="remove-item btn btn-default btn-xs pull-right"
                @click.prevent="removeTodoNow(elem.id)"
              >
                <span class="glyphicon glyphicon-remove"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState(['todos', 'completed']),
    ...mapGetters(['getCompleted', 'getNotCompleted']),
  },
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo', 'doneTodo', 'removeTodo']),
    addNewTodo() {
      if (!this.title) return;

      this.addTodo({
        id: new Date(),
        title: this.title,
        done: false,
      });
    },
    doneTodoNow(id) {
      this.doneTodo(id);
    },
    removeTodoNow(id) {
      this.removeTodo(id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  background-color: #eeeeee;
}
.checkbox > label {
  padding-left: 5px;
}
.add-todo {
  margin-bottom: 4px;
}
.add-todo-btn {
  float: right;
}
.todolist {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.todolist h1 {
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
}
.form-control {
  border-radius: 0;
}
li.ui-state-default {
  background: #fff;
  border: none;
  border-bottom: 1px solid #ddd;
}

li.ui-state-default:last-child {
  border-bottom: none;
}

.todo-header {
  background-color: #f4fce8;
  margin: -20px -20px 20px -20px;
  padding: 10px 20px;
}
#done-items li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  text-decoration: line-through;
}
#done-items li:last-child {
  border-bottom: none;
}
#checkAll {
  margin-top: 10px;
}
</style>
