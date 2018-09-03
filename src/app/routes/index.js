import React from "react"
import Loadable from "react-loadable"

const routes = [
  {
    path: "/",
    name: "Home",
    transId: "ui.home",
    component: Loadable({
      loader: () => import("./../views/pages/Home"),
      loading() {
        return <div>Loading...</div>
      },
    }),
    exact: true,
  },
  {
    path: "/parties",
    name: "Parties",
    transId: "ui.parties",
    component: Loadable({
      loader: () => import("./../views/pages/Parties"),
      loading() {
        return <div>Loading...</div>
      },
    }),
  },
  {
    path: "/team",
    name: "Team",
    transId: "ui.team",
    component: Loadable({
      loader: () => import("./../views/pages/Team"),
      loading() {
        return <div>Loading...</div>
      },
    }),
  },
]

export default routes
