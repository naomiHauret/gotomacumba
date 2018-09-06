import React, { Fragment } from "react"
import Translate from "views/components/wrappers/Translate"
import Container from "views/components/wrappers/Container"
import Button from "views/components/presentationals/Button"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import { Link } from "react-router-dom"
import { partiesPath, teamPath } from "app/routes"
import Macumba from "views/components/presentationals/Macumba"
import Countdown from "views/components/presentationals/Countdown"
import ManagedText from "views/components/presentationals/ManagedText"
import ScrollIcon from "views/components/presentationals/ScrollIcon"
import { mapValueToMediaQuery } from "fela-tools"
import { AppContext } from "app/contexts/App"
import TeamGallery from "views/components/presentationals/TeamGallery"

const Home = (props) => {
  const { styles } = props
  return (
    <Fragment>
      <section className={styles.sectionCountdown}>
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
          <Button brand="secondary" isLink={true} href="#" size="lg">
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
      <section className={styles.sectionSplit}>
        <div className={styles.sectionSplitImageWrapper}>
          <img
            alt=""
            src="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/19399632_1368945866493486_6730677755942650022_n.jpg?_nc_cat=0&oh=43a30f9f681927f731db5c505edd5261&oe=5BF74225"
          />
        </div>
        <div className={styles.sectionSplitContentWrapper}>
          <div>
            <h2 className={styles.sectionSplitTitle}>
              <Translate id="ui.party_all_night" />
            </h2>
            <AppContext.Consumer>
              {(value) => (
                <ManagedText locale={value.locale} docs={value.docs} pageType="homepage" dataId="what_is_macumba" />
              )}
            </AppContext.Consumer>
          </div>
        </div>
      </section>
      <section>
        <h2 className={styles.sectionSplitTitle}>
          <Translate id="ui.the_wild_ones" />
        </h2>
        <AppContext.Consumer>
          {(value) => <ManagedText locale={value.locale} docs={value.docs} pageType="homepage" dataId="wild_ones" />}
        </AppContext.Consumer>
        <AppContext.Consumer>
          {(value) => <TeamGallery locale={value.locale} docs={value.docs} pageType="page_t" dataId="wild_ones" />}
        </AppContext.Consumer>
        <Button brand="secondary" isLink={true} href={teamPath} size="md">
          <Translate id="ui.discover_team" />
        </Button>
      </section>
    </Fragment>
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
  sectionCountdown: () => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }),
  sectionSplit: () => ({
    display: "flex",
  }),
  rotatingTitle: () => ({
    animationName: rotating(),
    animationDuration: "8550ms",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate-reverse",
  }),
  titleWrapper: () => ({
    marginBottom: pxTo(75, baseFontSize, "rem"),
    marginTop: pxTo(-25, baseFontSize, "rem"),
  }),
  countdownWrapper: () => ({
    margin: `${pxTo(20, baseFontSize, "rem")} 0 ${pxTo(60, baseFontSize, "rem")}`,
  }),
  linkWrapper: () => ({
    margin: `${pxTo(30, baseFontSize, "rem")} 0`,
    fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
    fontStyle: "italic",
  }),
  sectionSplit: () => ({
    height: "100vh",
    display: "flex",
  }),
  sectionSplitImageWrapper: () => ({
    width: `${(5 / 12) * 100}%`,
    height: "100%",
    padding: ` ${pxTo(ds.get("grid.gutterWidth") * 3, baseFontSize, "rem")} ${pxTo(
      ds.get("grid.gutterWidth") * 2,
      baseFontSize,
      "rem",
    )}`,

    "> img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  }),
  sectionSplitContentWrapper: () => ({
    width: `calc( ${7 / 12} * ${pxTo(ds.get("grid.width.md"), baseFontSize, "rem")} + ${pxTo(
      ds.get("grid.gutterWidth"),
      baseFontSize,
      "rem",
    )} )`,
    paddingRight: pxTo(ds.get("grid.gutterWidth") * 2, baseFontSize, "rem"),
    margin: "auto",
    extend: [
      mapValueToMediaQuery(
        {
          lg: `calc( ${7 / 12} * ${pxTo(ds.get("grid.width.lg"), baseFontSize, "rem")} + ${pxTo(
            ds.get("grid.gutterWidth"),
            baseFontSize,
            "rem",
          )} )`,
          xl: `calc( ${7 / 12} * ${pxTo(ds.get("grid.width.xl"), baseFontSize, "rem")} + ${pxTo(
            ds.get("grid.gutterWidth"),
            baseFontSize,
            "rem",
          )} )`,
          "2xl": `calc( ${7 / 12} * ${pxTo(ds.get("grid.width.2xl"), baseFontSize, "rem")} + ${pxTo(
            ds.get("grid.gutterWidth"),
            baseFontSize,
            "rem",
          )} )`,
        },
        (value) => ({ width: value }),
      ),
    ],
    "> div": {
      width: ` ${(10 / 12) * 100}%`,
    },
  }),
  sectionSplitTitle: () => ({
    fontFamily: "Yellowtail",
    fontSize: pxTo(80, baseFontSize, "rem"),
    fontWeight: 100,
    transform: "rotate(-5deg)",
  }),
}

export default connect(rules)(Home)
