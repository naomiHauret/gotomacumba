import React from "react"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-fela"
import { routes } from "app/routes"
import Default from "app/views/templates/Default"
import { BrowserRouter } from "react-router-dom"
import { ds } from "app/styles/tokens"

const App = (props) => {
  const { styles } = props
  return (
    <div className={styles.default}>
      <BrowserRouter>
        <Default>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} {...route} />
            ))}
          </Switch>
        </Default>
      </BrowserRouter>
    </div>
  )
}

const rules = {
  default: () => ({
    minHeight: "100%",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "100%",
    backgroundImage: `url(${require("./../../assets/images/background.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: ds.get("colors.primary.light"),
  }),
}

export default connect(rules)(App)
