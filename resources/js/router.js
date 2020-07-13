import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/page/Home'
import Quiz from './components/page/Quiz'
import Login from './components/page/Login'
import Register from './components/page/Register'
import Mypage from './components/page/Mypage'

Vue.use(Router)

export default new Router({
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
      component: Mypage, // // URL「/mypage」に対してMyPageコンポーネントを使う
    },
  ]
})