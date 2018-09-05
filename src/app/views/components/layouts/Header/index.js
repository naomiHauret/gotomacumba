import React from "react"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import { withRouter } from "react-router"
import Navigation from "views/components/layouts/Navigation"
import Macumba from "views/components/presentationals/Macumba"
import Translate from "views/components/wrappers/Translate"
import SwitchLanguage from "views/components/layouts/SwitchLanguage"
import Container from "views/components/wrappers/Container"
import Grid from "views/components/wrappers/Grid"
import Col from "views/components/wrappers/Col"
import Button from "views/components/presentationals/Button"
import { routes, homePath } from "app/routes"
import { compose } from "recompose"

const Header = (props) => {
  const { switchLanguage, styles, location } = props
  return (
    <header className={styles.header}>
      <Container contained={true} display="flex" alignItems="center">
        {location.pathname !== homePath && (
          <div className={styles.logoWrapper}>
            <Macumba small={true} />
          </div>
        )}
        <Grid col={7} alignItems="center" marginLeft="auto" maxWidth={`${(7 / 12) * 100}%`}>
          <Col baseWidth={4}>
            <Navigation links={routes} />
          </Col>
          <Col baseWidth={2}>
            <Button brand="tertiary" size="2xs" isLink={true} href="https://fr.ulule.com/macumba-open-air/">
              <Translate id="ui.buy_a_shirt" />
            </Button>
          </Col>
          <Col baseWidth={1}>
            <SwitchLanguage handleSwitchLanguage={switchLanguage} />
          </Col>
        </Grid>
      </Container>
    </header>
  )
}

const baseFontSize = ds.get("type.baseFontSize")
const stickyPoint = 10
const rules = {
  header: () => ({
    display: "flex",
    fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
    padding: `${pxTo(stickyPoint * 2, baseFontSize, "rem")} 0 ${pxTo(stickyPoint, baseFontSize, "rem")}`,
    position: "sticky",
    top: `${pxTo(stickyPoint * -1, baseFontSize, "rem")}`,
  }),
  logoWrapper: () => ({
    transform: "translateX(-15%)",
  }),
}

export default compose(
  withRouter,
  connect(rules),
)(Header)
