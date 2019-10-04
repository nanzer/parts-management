import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
// import Home from './views/Home.vue';
import Comics from './components/Comics.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

Vue.use(Router);

const router = new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home,
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  //   },
  // ],

  routes: [
    {
      path: '/',
      // redirect: '/login',
      name: 'login',
      component: Login,
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login,
    // },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/comics',
      name: 'Comics',
      component: Comics,
      meta: {
        requiresAuth: true,
      },
    },
  ],

});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('comics');
  else next();
});

export default router;
