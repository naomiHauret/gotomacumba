import React from 'react'
import Loadable from "react-loadable"
import locales from "app/translations"
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Loadable({
      loader: () => import('./../views/pages/Home'),
      loading() {
        return <div>Loading...</div>
      }
    }),
    exact: true,
    display: true,
    sitemap: true,
  },
]

locales.map(locale => routes.map(route => ({
    ...route,
    path: `/${locale}${route.path}`
  })
))


export default routes