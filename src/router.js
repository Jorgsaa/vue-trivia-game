
/**
 * Dependencies
 * @ignore
 */
 import { createRouter, createWebHistory } from "vue-router";
 import Start from "./views/Start.vue";
 import NotFound from "./views/NotFound.vue";
 import Question from './views/Question.vue';
 import Result from './views/Result.vue';
 
 
 /**
  * Routes
  * @ignore
  */
 const routes = [
     {
         name: 'start',
         path: '/',
         component: Start,
     },
     {
         name: 'question',
         path: '/question',
         component: Question,
     },
     {
         name: 'result',
         path: '/result',
         component: Result,
     },
     // Catch all 404
     {
         path: '/:catchAll(.*)',
         name: 'NotFound',
         component: NotFound,
     }
 ]
 
 /**
  * Export 
  * @ignore
  */
 export default createRouter({
     history: createWebHistory( 
         process.env.NODE_ENV === 'production' ? process.env.VITE_BASE_PUBLIC_PATH : undefined
     ),
     routes,
 })