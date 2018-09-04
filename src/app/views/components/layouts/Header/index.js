import React from "react"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import Navigation from "views/components/layouts/Navigation"
import Translate from "views/components/wrappers/Translate"
import SwitchLanguage from "views/components/layouts/SwitchLanguage"
import Container from "views/components/wrappers/Container"
import Grid from "views/components/wrappers/Grid"
import Col from "views/components/wrappers/Col"
import Button from "views/components/presentationals/Button"
import { routes } from "app/routes"

const Header = (props) => {
  const { switchLanguage, styles } = props
  return (
    <header className={styles.header}>
      <Container contained={true}>
        <Grid col={6} alignItems="center" marginLeft="auto" maxWidth={`${(6 / 12) * 100}%`}>
          <Col baseWidth={3}>
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
}

export default connect(rules)(Header)
