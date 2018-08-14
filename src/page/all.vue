<!-- 全部 -->
<template>
    <section class="todoapp">

        <Head></Head>
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <ul class="todo-list">
                <li>
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>123</label>
                        <button class="destroy"></button>
                    </div>
                </li>
            </ul>
        </section>
        <Foot></Foot>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {
        Head: resolve => {
            require(["@/components/Head"], resolve);
        },
        Foot: resolve => {
            require(["@/components/Foot"], resolve);
        }
    },

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style scoped>
</style>