import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'
import System from '@/components/System.vue'


Vue.use(Router)



 const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/system',
      name: 'System',
      component: System,
      meta: {
        requiresAuth: true,
      }
    }

  ]
})

// router.beforeEach((to, from, next) => {
//   const { currentUser } = firebase.auth();
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('system');
//   else next();
// });

export default router;