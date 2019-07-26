var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: { template: '<div>최상위 페이지입니다.</div>' }
    },
    {
      path: '/users',
      name: 'users',
      component: UserList
    },
    {
      path: '/users/new',
      component: UserCreate,
      beforeEnter: function(to, from, next) {
        if (!Auth.loggedIn()) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          });
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: function(to, from, next) {
        Auth.logout();
        next('/');
      }
    },
    {
      path: '/users/:userId',
      component: UserDetail
    }
  ]
});
