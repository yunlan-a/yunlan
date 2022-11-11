import { RouteRecordRaw} from 'vue-router';
import Layout from '@/layout/Layout.vue'

const routers: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component:() => import('@/view/login/login.vue'),
    },    
    {
        path: '/',
        component: Layout,
        children: [
          {
            path: '/',
            name: 'manage',
            component: () => import('@/view/manage/index.vue')
          }
        ]
      }, 
];
export default routers;