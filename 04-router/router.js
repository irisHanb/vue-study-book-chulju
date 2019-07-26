var router = new VueRouter({
  mode: 'history',
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
      name: 'user',
      component: UserDetail,
      children: [
        {
          path: 'profile',
          component: {
            template: '<div> {{$route.params.userId}} 님의 profile </div>'
          }
        },
        {
          path: 'post',
          component: {
            template: '<div>{{$route.params.userId}}님의 post</div>'
          }
        }
      ]
    }
  ]
});
