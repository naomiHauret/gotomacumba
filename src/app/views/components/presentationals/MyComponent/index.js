import React from "react"
import { connect as styleConnect } from "react-fela"
import { compose, withHandlers } from "recompose"
import { withRouter } from "react-router-dom"
import { Redirect } from "react-router"

const MyComponent = (props) => {
  const {styles, changeLanguage,  match, location, history } = props
  return <div className={styles.default}>
      <button locale="en" onClick={(e) => {
          e.preventDefault()
          changeLanguage(e.currentTarget.getAttribute("locale"))
          return <Redirect to="/en" />
        }}>

oooooooooooooooo
        </button>
      <button locale="fr" onClick={(e) => {
          e.preventDefault()
          changeLanguage(e.currentTarget.getAttribute("locale"))
          return <Redirect to="/fr" />
        }}>
        oooooooo
      </button>
    </div>
}

const rules = {
  default: () => ({
      color: 'darkCyan',
      background: 'black'
  }),
}

export default compose(
  withRouter,
  styleConnect(rules))(MyComponent)