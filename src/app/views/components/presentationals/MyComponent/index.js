import React from "react"
import { connect as styleConnect } from "react-fela"
import { compose, withHandlers } from "recompose"
import { withRouter } from "react-router-dom"
import { Redirect } from "react-router"
import Translate from "views/components/wrappers/Translate"
const MyComponent = (props) => {
  const { styles, changeLanguage, match, location, history } = props
  return (
    <div className={styles.default}>
    <Translate id="ui.hello"/>
    </div>
  )
}

const rules = {
  default: () => ({
    color: "darkCyan",
    background: "black",
  }),
}

export default compose(
  withRouter,
  styleConnect(rules),
)(MyComponent)
