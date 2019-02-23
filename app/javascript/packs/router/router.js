import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import About from '../components/about.vue'
import Done from '../components/done.vue'
import Couldnot from '../components/couldnot'
import Add from '../components/add'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '/done', component: Done },
        { path: '/couldnot', component: Couldnot },
        { path: '/add', component: Add },
    ],
})