<template>
  <div>
    <h1>Todos Vue</h1>
    <section>
      <TodoInput @submit="handleOnSubmit" />
      <ul id="list-container">
        <TodoItem
          v-for="(item, index) in list" 
          :key="item.value" 
          :index="index" 
          :checked="item.checked" 
          :text="item.text" 
          @remove="handleRemove" 
          @toggle="handleToggle" />
      </ul>
    </section>
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'MyTodo',
  components: {
    TodoInput,
    TodoItem
  },
  data() {
    return {
      list: [
        { text: 'my initial todo', checked: false },
        { text: 'Learn about Web Components', checked: true },
      ],
    };
  },
  methods: {
    handleOnSubmit(text) {
      this.list = [...this.list, { text, checked: false }];
    },
    handleToggle(value) {
      const index = parseInt(value)
      this.list[index].checked = !this.list[index].checked
    },
    handleRemove(value) {
      const index = parseInt(value)
      this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]
    },
  },
};
</script>

<style>
:host {
  display: block;
}
h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}
section {
  background: #fff;
  margin: 30px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
#list-container {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #e6e6e6;
}
</style>