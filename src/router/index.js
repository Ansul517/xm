import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
import login from '../views/Login.vue'
import home from '../views/Home.vue'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            component: resolve => require(['../views//Login.vue'], resolve)
        },
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['../views/Home.vue'], resolve)
                // meta: {
                //     requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                // }
        },
        // {
        //   // path: '/about',
        //   // name: 'about',
        //   // // route level code-splitting
        //   // // this generates a separate chunk (about.[hash].js) for this route
        //   // // which is lazy-loaded when the route is visited.
        //   // component: () =>
        //   //     import ( /* webpackChunkName: "about" */ './views/About.vue')
        // }
    ],
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');

        if (token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});

export default router;
// router.beforeEach((to, from, next) => {
//     const token = store.state.token
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//       if (token) { // 通过vuex state获取当前的token是否存在
//         next()
//       } else {
//         console.log('该页面需要登陆')
//         next({
//           path: '/login'
//           // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//         })
//       }
//     } else {
//       next()
//     }
//   })