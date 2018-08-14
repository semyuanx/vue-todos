<template>
    <footer class="footer" >
        <span class="todo-count"><strong>456</strong>项待处理</span>
        <ul class="filters">
            <li class="selected">
                <a href="javascript:void(0)" >全部</a>
            </li>
            <li>
                <a href="javascript:void(0)" >未完成</a>
            </li>
            <li>
                <a href="javascript:void(0)">已完成</a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  props:['todos','len'],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>