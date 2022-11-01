import { createRouter, createWebHashHistory } from "vue-router";
import Dash from '../views/admin/Dashboard.vue';
import Employees from '../views/admin/Employees.vue';
import Addemployees from '../views/admin/Addemployees.vue';
import Login from '../views/Login.vue';



const routes = [
    {   name: 'dash',
        path: '/dashboard', 
        component: Dash },

    {   name: 'login',
        path: '/', 
        component: Login },

   {    name: 'listeEmployees',
        path: '/employees', 
        component: Employees },

  {    name: 'addemploye',
        path: '/addemploye', 
        component: Addemployees }
    
  ]


  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router;