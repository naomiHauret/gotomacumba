import React, { Fragment } from "react"
import { connect } from "react-fela"
import { mapValueToMediaQuery } from "fela-tools"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"

const Macumba = (props) => {
  const { styles, small } = props

  return (
    <Fragment>
      <h1 className={styles.wrapper}>
        <div className={styles.mainTitle}>
          Macumba
          <span className={styles.subTitle}>Open Air Fest</span>
        </div>
      </h1>
    </Fragment>
  )
}

const baseFontSize = ds.get("type.baseFontSize")
const neonEffect = () => ({
  from: {
    textShadow: `
        0 0 ${pxTo(1, baseFontSize, "rem")} ${ds.get("colors.primary.light")},
        0 ${pxTo(-2, baseFontSize, "rem")} ${pxTo(27, baseFontSize, "rem")} ${ds.get("colors.macumba.pink")},
        0 ${pxTo(3, baseFontSize, "rem")} ${pxTo(3, baseFontSize, "rem")} rgba(0, 0, 0, 0.5),
        0 0 ${pxTo(15, baseFontSize, "rem")} ${ds.get("colors.macumba.pink")},
        0 0 ${pxTo(45, baseFontSize, "rem")} ${ds.get("colors.macumba.pink80p")}`,
  },
  to: {
    textShadow: `
        0 0 ${pxTo(1, baseFontSize, "rem")} ${ds.get("colors.primary.light")},
        0 ${pxTo(-5, baseFontSize, "rem")} ${pxTo(15, baseFontSize, "rem")} ${ds.get("colors.primary.blue")},
        0 ${pxTo(3, baseFontSize, "rem")} ${pxTo(3, baseFontSize, "rem")} rgba(0, 0, 0, 0.5),
        0 0 ${pxTo(10, baseFontSize, "rem")} ${ds.get("colors.primary.blue")},
        0 0 ${pxTo(25, baseFontSize, "rem")} ${ds.get("colors.50p.blue")}`,
  },
})

const rules = {
  wrapper: ({ small }) => ({
    position: "relative",
    transform: small ? "scale(0.45) translateX(-28%)" : "",
  }),
  mainTitle: () => ({
    position: "relative",
    fontFamily: "sans-serif",
    fontSize: pxTo(60, baseFontSize, "rem"),
    fontWeight: 1000,
    margin: 0,
    textTransform: "uppercase",
    zindex: 10,
    background: `-webkit-linear-gradient(top, ${ds.get("colors.macumba.blue")} 20%, ${ds.get(
      "colors.primary.light",
    )} 39%, ${ds.get("colors.macumba.purple")} 40%, ${ds.get("colors.macumba.black")} 45%, ${ds.get(
      "colors.macumba.pink",
    )} 75%, ${ds.get("colors.primary.light")})`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-webkit-text-stroke-width": pxTo(2, baseFontSize, "rem"),
    "-webkit-text-stroke-color": ds.get("colors.primary.light"),
    extend: [
      mapValueToMediaQuery(
        {
          xs: pxTo(100, baseFontSize, "rem"),
          sm: pxTo(120, baseFontSize, "rem"),
        },
        (value) => ({ fontSize: value }),
      ),
    ],
  }),
  subTitle: () => ({
    position: "absolute",
    display: "block",
    fontFamily: "'Yellowtail', cursive",
    fontSize: pxTo(40, baseFontSize, "rem"),
    position: "absolute",
    animationName: neonEffect(),
    animationDuration: "8650ms",
    animationTimingFunction: "linear",
    animationDirection: "alternate-reverse",
    animationIterationCount: "infinite",
    textAlign: "center",
    textTransform: "none",
    fontWeight: 100,
    "-webkit-text-stroke-width": 0,
    transform: `rotate(-5deg) translate(${pxTo(2, baseFontSize, "rem")}, ${pxTo(70, baseFontSize, "rem")})`,
    top: 0,
    width: "100%",
    zIndex: 11,
    extend: [
      mapValueToMediaQuery(
        {
          sm: pxTo(50, baseFontSize, "rem"),
        },
        (value) => ({ fontSize: value }),
      ),
      mapValueToMediaQuery(
        {
          xs: `rotate(-5deg) translate(${pxTo(145, baseFontSize, "rem")}, ${pxTo(110, baseFontSize, "rem")})`,
          sm: `rotate(-5deg) translate(${pxTo(218, baseFontSize, "rem")}, ${pxTo(
            120,
            baseFontSize,
            "rem",
          )}) !important`,
        },
        (value) => ({ transform: value }),
      ),
    ],
  }),
}

export default connect(rules)(Macumba)
