import { createRouter, createWebHistory } from 'vue-router';
import aboutEletronicWastePage from '../pages/aboutEletronicWastePage/index.vue'
import aboutUsPage from '../pages/aboutUsPage/index.vue'
import locationsPage from '../pages/locationsPage/index.vue'

const routes = [
    {path: '/', component: locationsPage},
    {path: '/aboutEletronicWastePage', component: aboutEletronicWastePage},
    {path: '/aboutUsPage', component: aboutUsPage},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;