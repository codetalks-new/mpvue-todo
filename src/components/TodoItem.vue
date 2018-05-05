
<template>
  <li class="todo-item">
    <span v-show="todo.done" @click="markTodo">✓</span> 
    <span v-show="!todo.done" @click="markDone">☐</span>
    <span> {{todo.content}} </span>
    <a  class="delete" @click="deleteTodo">删除</a>
  </li>
</template>

<script lang="ts">
import Vue from "vue"
import Compoment from 'vue-class-component'
import Todo from "../models/todo"

@Compoment({
    props:{
        todo: Todo
    }
})
export default class TodoItem extends Vue{
    todo!: Todo 

    mounted(){
        console.log("mounted", this.todo.content)
    }

    markTodo(){
        this.todo.done = false
    }

    markDone(){
        this.todo.done = true
    }
    deleteTodo(){
        this.$emit('deletetodo')
    }
}
</script>

<style lang="css">
li.todo-item {
  list-style: none;
}
.todo-item {
  color: #ff0099;
}
.delete {
  color: red;
}
</style>
