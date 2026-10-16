import Home from "@/views/Home.vue"
import Login from "@/views/login.vue"
import Object from "@/views/Object.vue"
import Product from "@/views/product.vue"
import Sale from "@/views/sale.vue"
import Test from "@/views/Test.vue"
import {createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/object',
        name: 'Object',
        component: Object
    },
    {
        path: '/login',
        name: 'login',
        component: Login    
    },
    {
        path: '/sale',
        name: 'sale',
        component: Sale   
    },
    {
        path: '/product',
        name: 'product',
        component: Product   
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


