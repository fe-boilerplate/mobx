// import React from 'react'
import Home from './pages/Home/'
import Login from './pages/Login/'
import NotFound from './pages/NotFound/'
// import Protected from './pages/Protected/'
import SubItem from './pages/SubItem/'
import Subpage from './pages/Subpage/'

export default [
  {
    pattern: '/',
    exactly: true,
    component: Home,
    title: '首页'
  },
  {
    pattern: '/login',
    title: 'login',
    exactly: true,
    component: Login
  },
  {
    pattern: '/NotFound',
    title: 'NotFound',
    exactly: true,
    component: NotFound
  },
  {
    pattern: '/posts/:id',
    title: 'SubItem',
    exactly: true,
    component: SubItem
  },
  {
    pattern: '/posts',
    title: 'Subpage',
    exactly: true,
    component: Subpage
  }
]
