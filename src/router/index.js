import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublicationView from '../views/PublicationView.vue'
import VideoCourse from '../views/VideoCourse.vue'
import ResearchView from '../views/ResearchView.vue'
import AboutView from '../views/AboutView.vue'
import SingleResearch from '../views/SingleResearchView.vue'
import GuideView from '../views/GuideView.vue'
import Login from '../components/Login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: '/uz', query: { q: to.params.lan } }
      },
    },  
    {
      path: '/:lan',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/:lan/tutorials',
      name: 'tutorials',
      component: VideoCourse
    },
    { 
      path: '/:lan/news',
      name: 'news',
      component: ResearchView
    },
    {
      path: '/:lan/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:lan/guide',
      name: 'guide',
      component: GuideView
    },
    {
      path: '/:lan/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:lan/news/:id',
      name: 'single',
      component: SingleResearch
    },
  ]
})

export default router
