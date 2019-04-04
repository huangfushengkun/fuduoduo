
import Home from '@/views/Home/Home.vue'
import Chat from '@/views/Chat/Chat.vue'
import Me from '@/views/Me/Me.vue'
import Recommend from '@/views/Recommend/Recommend.vue'
import Search from '@/views/Search/Search.vue'

//home下的子路由
import Hot from '@/views/Home/Children/Hot/Hot.vue'
import Box from '@/views/Home/Children/Box.vue'
import Dress from '@/views/Home/Children/Dress.vue'
import Ele from '@/views/Home/Children/Ele.vue'
import Food from '@/views/Home/Children/Food.vue'
import General from '@/views/Home/Children/General.vue'
import Man from '@/views/Home/Children/Man.vue'
import Mbaby from '@/views/Home/Children/Mbaby.vue'
import Shirt from '@/views/Home/Children/Shirt.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: Home,
    children: [
      {path: 'hot',component:Hot},
      {path: 'box',component:Box},
      {path: 'dress',component:Dress},
      {path: 'food',component:Food},
      {path: 'general',component:General},
      {path: 'ele',component:Ele},
      {path: 'man',component:Man},
      {path: 'mbaby',component:Mbaby},
      {path: 'shirt',component:Shirt},
      {path: '/home',redirect: '/home/hot'}
    ]
  },{
    path: '/chat',
    component: Chat
  },{
    path: '/me',
    component: Me
  },{
    path: '/recommend',
    component: Recommend
  },{
    path: '/search',
    component: Search
  }
]

export default routes