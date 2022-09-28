export interface routeType {
  path: string
  component?:any
  children?:Array<routeType>
  meta?: {
    title?:string
    needLogin?: boolean
  }
  redirect?: string
}
// 定义路由
const routes: Array<routeType> = [
  {path: '/',component: () => import('@/layout/Base'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
          title: '首页'
        }
      }, {
        path: '/about',
        component: () => import('@/pages/About'),
        meta: {
          title: '关于'
        }
      }
    ]
  }
]
export default routes;