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
    background: "-webkit-linear-gradient(top, #0800ff 20%, #ffffff 39%, #5444ce 40%, black 41%, magenta 75%, white)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-webkit-text-stroke-width": pxTo(2, baseFontSize, "rem"),
    "-webkit-text-stroke-color": "white",
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
    textShadow: `
        0 0 ${pxTo(1, baseFontSize, "rem")} #d100b1,
        0 ${pxTo(-3, baseFontSize, "rem")} ${pxTo(3, baseFontSize, "rem")} rgba(255, 255, 255, 0.8),
        0 ${pxTo(3, baseFontSize, "rem")} ${pxTo(3, baseFontSize, "rem")} rgba(0, 0, 0, 0.5),
        0 0 ${pxTo(15, baseFontSize, "rem")} #d100b1,
        0 0 ${pxTo(45, baseFontSize, "rem")} rgba(209, 0, 177, 0.8)`,
    textAlign: "center",
    textTransform: "none",
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
