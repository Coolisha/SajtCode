import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Kontakt from '../views/Kontakt.vue'
import Galerija from '../views/Galerija.vue'
import GalerijaSekcija from '../views/GalerijaSekcija.vue'
import Hemija from '../views/Hemija.vue'
import ProjektovanjeIzgradnja from '../views/ProjektovanjeIzgradnja.vue'
import RenoviranjeOdrzavanje from '../views/RenoviranjeOdrzavanje.vue'
import BazenskaOprema from '../views/BazenskaOprema.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminPanel from '../views/AdminPanel.vue'
import AdminGalerija from '../views/AdminGalerija.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    { 
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt 
    },
    { 
      path: '/galerija',
      name: 'galerija',
      component: Galerija 
    },
    { 
      path: '/galerijaSekcija',
      name: 'galerijaSekcija',
      component: GalerijaSekcija
    },
    { 
      path: '/hemijskaSredstva',
      name: 'hemijskaSredstva',
      component: Hemija
    },
    { 
      path: '/projektovanjeIzgradnja',
      name: 'projektovanjeIzgradnja',
      component: ProjektovanjeIzgradnja
    },
    { 
      path: '/renoviranjeOdrzavanje',
      name: 'renoviranjeOdrzavanje',
      component: RenoviranjeOdrzavanje
    },
    { 
      path: '/bazenskaOprema',
      name: 'bazenskaOprema',
      component: BazenskaOprema
    },
    { 
      path: '/adminLogin',
      name: 'adminLogin',
      component: AdminLogin
    },
    { 
      path: '/adminPanel',
      name: 'adminPanel',
      component: AdminPanel
    },
    { 
      path: '/adminGalerija',
      name: 'adminGalerija',
      component: AdminGalerija
    },
  ]
})


export default router
