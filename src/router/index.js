import { createRouter, createWebHistory } from 'vue-router';
import aboutEletronicWastePage from '../pages/aboutEletronicWastePage/index.vue'
import aboutUsPage from '../pages/aboutUsPage/index.vue'
import locationsPage from '../pages/locationsPage/index.vue'

const routes = [
    {path: '/', component: homePage},
    {path: '/aboutEletronicWastePage', component: aboutEletronicWastePage},
    {path: '/aboutUsPage', component: aboutUsPage},
    {path: '/locationsPage', components: locationsPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;