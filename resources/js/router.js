import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/page/Home'
import Quiz from './components/page/Quiz'
import Login from './components/page/Login'
import Register from './components/page/Register'
import Mypage from './components/page/Mypage'
import Keyword from './components/page/Keyword'

Vue.use(Router)

const router = new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home // URL「/」に対してHomeコンポーネントを使う
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz // URL「/quiz」に対してQuizコンポーネントを使う
    },
    {
      path: '/login',
      name: 'login',
      component: Login //URL[/login]に対してloginコンポーネントを使う
    },
    {
      path: '/register',
      name: 'register',
      component: Register // URL「/register」に対してRegisterコンポーネントを使う
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: Mypage, // URL「/mypage」に対してMyPageコンポーネントを使う

      meta: {
        requiresAuth: true // /mypageに対してのみ認証を必須とする
      }
    },
    {
      path: '/keyword',
      name: 'keyword',
      component: Keyword // URL「/keyword」に対してKeywordコンポーネントを使う
    },
  ]
});

router.beforeEach((to, from, next) => {
  //マイページ画面にアクセスするユーザーが未認証であればマイページが見れなくなり、
  //認証中であればnext()を呼び出しマイページ画面に遷移する。
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    router.app.$http.get("/api/user").then(response => {
      const user = response.data;
      if (user) {
        next() //次の画面を表示する
      } else {
        next({
          path: '/login',
        })
      }
    }).catch(error => {
      if (error.response.status === 401) {
        alert("未認証のユーザーのためログイン画面でログインを行ってください");
      } else {
        alert("予期しないエラーが発生しました。再度ログインを行ってください");
      }
      next({
        path: '/login',
      })
    });
  } else {
    next() //次の画面を表示する
  }
})
export default router