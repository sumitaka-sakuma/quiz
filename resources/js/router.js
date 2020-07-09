import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/page/Home'
import Quiz from './components/page/Quiz'
import Register from './components/page/Register'

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
      path: '/register',
      name: 'register',
      component: Register // URL「/register」に対してRegisterコンポーネントを使う
    },
  ]
})