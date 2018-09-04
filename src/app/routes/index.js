import React from "react"
import Loadable from "react-loadable"
export const homePath = "/"
export const partiesPath = "/parties"
export const teamPath = "/team"
export const routes = [
  {
    path: homePath,
    name: "Home",
    transId: "ui.macumba",
    component: Loadable({
      loader: () => import("./../views/pages/Home"),
      loading() {
        return <div>Loading...</div>
      },
    }),
    exact: true,
  },
  {
    path: partiesPath,
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
    path: teamPath,
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
