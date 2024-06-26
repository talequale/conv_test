import { createRouter, createWebHistory } from 'vue-router';

import Contacts from './components/Contacts.vue';
import About from './components/About.vue';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: App
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export default router;