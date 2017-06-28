import Vue from 'vue'
import VueRouter from 'vue-router'

import dds from '@/components/dds'
import about from '@/components/about'
import documt from '@/components/document'
import notf from '@/components/notfound'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/index',
      name:'Index',
      component: dds,
      alias:'/home'
    },
    {
    	path:'/about',
    	name:'About',
    	component:about
    },
    {
    	path:'/document',
    	name:'Document',
    	component:documt
    },{
    	path:'/error',
    	name:'Error',
    	component:notf
    },
    {
    	path:'*',
    	//redirect:'/index'//重定向
    	//redirect:'/index'
    	//redirect: {path:'/index'}
    	//redirect: {name:'Index'}
    	redirect:(to)=>{
    		if(to.path=='/'){
    			return {path:'/index'}
    		}else{
    			return {name:'Error'}
    		}
    		
    	}
    }
  ]
})
