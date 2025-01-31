import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
// import Contact from "../views/Contact.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: About
    }
    // ,
    // {
    //     path: '/contanct',
    //     name: 'Contact',
    //     component: Contact
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router