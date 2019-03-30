
import Home from '@/views/Home/Home.vue'
import Chat from '@/views/Chat/Chat.vue'
import Me from '@/views/Me/Me.vue'
import Recommend from '@/views/Recommend/Recommend.vue'
import Search from '@/views/Search/Search.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: Home
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