import React from "react"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-fela"
import routes from "app/routes"

const App = (props) => {
  const { styles } = props
  return (
    <div className={styles.default}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  )
}

const rules = {
  default: () => ({
    minHeight: "100%",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "100%",
  }),
}

export default connect(rules)(App)
