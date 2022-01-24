
/**
 * Dependencies
 * @ignore
 */
 import { createRouter, createWebHistory } from "vue-router";
 import Start from "./views/Start.vue";
 import NotFound from "./views/NotFound.vue";
 
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
     history: createWebHistory(),
     routes,
 })