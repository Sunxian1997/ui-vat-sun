import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import Home from '../views/home/home';
import Input from '../views/components/input/index';
import Button from '../views/components/button/index';
import DatePicker from '../views/components/datePicker/index';
import Radio from '../views/components/radio/index';
import Switch from '../views/components/switch/index';
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/components/input',
                    component: Input
                },
                {
                    path: '/components/button',
                    component: Button
                },
                {
                    path: '/components/datePicker',
                    component: DatePicker
                },
                {
                    path: '/components/radio',
                    component: Radio
                },
                {
                    path: '/components/switch',
                    component: Switch
                }
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    next()

})

// 判断重复点击当前路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default router

