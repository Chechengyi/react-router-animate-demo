/**
 *@author: chechengyi
 *@time: 2019/9/2
 *@desc:
 */

import One from './pages/One'
import Two from './pages/Two'
import { lazyload } from './lazyload'

export default [{
    path: '/',
    redirect: true,
    to: '/one'
},{
    title: 'one page',
    path: '/one',
    component: lazyload(()=>import('./pages/One'))
    // component: One
}, {
    title: 'two page',
    path: '/two',
    component: lazyload(()=>import('./pages/Two'))
    // component: Two
}];
