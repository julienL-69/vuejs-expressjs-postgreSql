import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Register from '../components/Register'
import Phase from '../components/PhaseDisplay'
import Vuetify from '../components/Vuetify'

Vue.use(Router)

// routing pour le coté client: route vers composant vuejs
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/phase',
      name: 'phase',
      component: Phase
    },
    {
      path: '/test',
      name: 'test',
      component: Vuetify
    }

  ]
})
