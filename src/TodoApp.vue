<template>
   <div id="todo-app">
    <h3>我的待办事项列表</h3>
    <form method="post">
      <input id="todo_content" @input="onInputNewTodoContent"  v-model="newTodoContent" name="todo_content" placeholder="请输入待办事项" />
      <button id="submit-button" type="submit" @click="submit">创建</button>
    </form>
    <p v:show="newTodoError"> {{newTodoError}} </p>
    <ul>
     <todo-item v-for="todo in todos" :key="todo.content" :todo="todo" @deletetodo="deleteTodo(todo)" ></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Compoment from "vue-class-component";
import Todo from "./models/todo";
import TodoItem from "./components/TodoItem.vue";

@Compoment({
  components: {
    TodoItem
  }
})
export default class TodoApp extends Vue {
  todos = [new Todo("学习 JS"), new Todo("学习 CSS"), new Todo("学习 HTML")];
  newTodoContent = "";
  newTodoError = "";

  submit(event: any) {
    let content = this.newTodoContent.trim();
    if (content.length < 1) {
      this.newTodoError = "待办事项内容不能为空";
    } else {
      const todo = new Todo(content);
      this.todos.push(todo);
      this.newTodoContent = '';
    }
    event.preventDefault();
    return false;
  }

  markDone(todo: Todo) {
    todo.done = true;
  }

  markTodo(todo: Todo) {
    todo.done = false;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  onInputNewTodoContent() {
    this.newTodoError = "";
  }
}
</script>

