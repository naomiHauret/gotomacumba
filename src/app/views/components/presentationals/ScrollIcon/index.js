import React from "react"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"

const ScrollIcon = (props) => {
  const { styles } = props
  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.75 62.5">
        <rect
          x="1.97"
          y="1.93"
          width="36.78"
          height="58.85"
          rx="18.39"
          ry="18.39"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <circle cx="20.36" cy="21.18" r="2.08" fill="currentColor" />
      </svg>
    </div>
  )
}

const baseFontSize = ds.get("type.baseFontSize")

const keyframe = () => ({
  "20%, 100%": {
    opacity: 0,
    transform: `translateY(${pxTo(10, baseFontSize, "rem")})`,
  },
  "0%": {
    opacity: 0,
  },
  "10%": {
    opacity: 1,
  },
  "40%": {
    opacity: 1,
  },
})

const rules = {
  wrapper: () => ({
    width: pxTo(40, baseFontSize, "rem"),
    height: pxTo(40, baseFontSize, "rem"),
    margin: "auto",
  }),
  svg: () => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    "> circle": {
      animationName: keyframe(),
      animationDuration: "2650ms",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    },
  }),
}

export default connect(rules)(ScrollIcon)
