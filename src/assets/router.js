import VueRouter from "vue-router";
import index from '../components/index.vue'
import my from '../components/my.vue'
import type from '../components/type.vue'
import shopcar from '../components/shopcar.vue'
import first from'../components/first.vue'

import regiter from '../components/regiter.vue'

import person from '../components/person.vue'

import list from '../components/list.vue'

import xiangqing from '../components/xiangqing.vue'


export default new VueRouter({
    routes:[
       {
         path:'/',
         component:first,
         children:[
            {
                path:'/index',
                component:index,
            },
            {
                path:'/type',
                component:type
            },
          

            {
                path:'/person',
                component:person
            }
         ],
         redirect:'/index'
       },

       {
        path:'/my',
        component:my
       },

       {
        path:'/shopcar',
        component:shopcar,
    
       },   
       {
        path:'/regiter',
        component:regiter
       },

       {
        path:'/list',
        component:list
       }
     ,
     {
        path:'/xiangqing',
        // name:'xiangqing',
        component:xiangqing
     },
       {
        path:'/*',
        component:index
       }
    ]
})