import React from "react"
import Translate from "views/components/wrappers/Translate"
import Container from "views/components/wrappers/Container"
import Button from "views/components/presentationals/Button"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import { Link } from "react-router-dom"
import { partiesPath } from "app/routes"

const Home = (props) => {
  const { styles } = props
  return (
    <section className={styles.section}>
      <Container textAlign="center" margin="auto">
        <h1 className={styles.smallerTitle}>
          <Translate id="ui.macumba" />
        </h1>
        <h2 className={styles.biggerTitle}>
          <Translate id="ui.next_party" />
        </h2>

        <Button brand="primary" isLink={true} href="#" size="lg">
          <Translate id="ui.join_event_on_facebook" />
        </Button>
        <div className={styles.linkWrapper}>
          <Link to={partiesPath}>
            <Translate id="ui.see_past_parties" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

const baseFontSize = ds.get("type.baseFontSize")
const rules = {
  section: () => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }),
  smallerTitle: () => ({
    fontSize: pxTo(ds.get("type.sizes.lg"), baseFontSize, "rem"),
    fontFamily: ds.get("type.fontFamily.semibold"),
    marginBottom: pxTo(20, baseFontSize, "rem"),
  }),
  biggerTitle: () => ({
    letterSpacing: "0.25ch",
    fontFamily: ds.get("type.fontFamily.bold"),
    fontSize: pxTo(ds.get("type.sizes.3xl"), baseFontSize, "rem"),
    marginBottom: pxTo(35, baseFontSize, "rem"),
    textTransform: "uppercase",
  }),
  linkWrapper: () => ({
    marginTop: pxTo(30, baseFontSize, "rem"),
  }),
}

export default connect(rules)(Home)
