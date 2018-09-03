import React from "react"
import Navigation from "views/components/layouts/Navigation"
import SwitchLanguage from "views/components/layouts/SwitchLanguage"
import routes from "app/routes"

const Header = (props) => {
  const { switchLanguage } = props
  return (
    <header>
      <Navigation links={routes} />
      <SwitchLanguage handleSwitchLanguage={switchLanguage} />
    </header>
  )
}

export default Header
