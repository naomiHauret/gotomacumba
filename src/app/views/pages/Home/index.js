import React from "react"
import Translate from "views/components/wrappers/Translate"
import Container from "views/components/wrappers/Container"
import Button from "views/components/presentationals/Button"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import { Link } from "react-router-dom"
import { partiesPath } from "app/routes"
import Macumba from "views/components/presentationals/Macumba"
import Countdown from "views/components/presentationals/Countdown"
import ScrollIcon from "views/components/presentationals/ScrollIcon"

const Home = (props) => {
  const { styles } = props
  return (
    <section className={styles.section}>
      <Container textAlign="center" margin="auto">
        <div className={styles.titleWrapper}>
          <Macumba />
        </div>
        <h2 className={styles.rotatingTitle}>
          <Translate id="ui.next_opening" />
        </h2>
        <div className={styles.countdownWrapper}>
          <Countdown deadline="September 29, 2018 19:00:00" />
        </div>
        <Button brand="primary" isLink={true} href="#" size="lg">
          <Translate id="ui.join_event_on_facebook" />
        </Button>
        <div className={styles.linkWrapper}>
          <Link to={partiesPath}>
            <Translate id="ui.see_past_parties" />
          </Link>
        </div>
        <ScrollIcon />
      </Container>
    </section>
  )
}

const baseFontSize = ds.get("type.baseFontSize")
const rotating = () => ({
  from: {
    transform: "rotateY(50deg) rotateX(-25deg)",
  },
  to: {
    transform: "rotateY(-50deg) rotateX(-25deg)",
  },
})

const rules = {
  section: () => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }),
  rotatingTitle: () => ({
    animationName: rotating(),
    animationDuration: "8550ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate-reverse",
    color: ds.get("colors.primary.pink"),
  }),
  titleWrapper: () => ({
    marginBottom: pxTo(75, baseFontSize, "rem"),
  }),
  countdownWrapper: () => ({
    margin: `${pxTo(50, baseFontSize, "rem")} 0 ${pxTo(60, baseFontSize, "rem")}`,
  }),
  linkWrapper: () => ({
    margin: `${pxTo(30, baseFontSize, "rem")} 0`,
    fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
    fontStyle: "italic",
  }),
}

export default connect(rules)(Home)
