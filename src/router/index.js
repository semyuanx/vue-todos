import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export default new Router({
    routes:[{
        path:'/',
        component:resolve=>{
            require(["@/page/all.vue"],resolve)
        }
    },{
        path:'/select',
        component:resolve=>{
            require(['@/page/select.vue'],resolve)
        }
    },{
        path:'/notselect',
        component:resolve=>{
            require(["@/page/notselect.vue"],resolve)
        }
    }]
})