<template>
    <header class="header">
            <h1>{{msg}}</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="addTodos" v-model.trim="text">
        </header>
</template>

<script>
export default {
  data() {
    return {
        msg:'todos',
        text:''
    };
  },
  methods: {
    addTodos() {     
        this.$emit("addList",this.text)
        this.text = "";
    }  
  }
};
</script>

<style scoped>
</style>