import React from "react"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import { Link } from "react-router-dom"
import { homePath, partiesPath, teamPath } from "app/routes"

const baseFontSize = ds.get("type.baseFontSize")

const defaultSpacing = pxTo(2, baseFontSize, "em")

const defaultPadding = `${pxTo(20, baseFontSize, "em")} ${pxTo(25, baseFontSize, "em")}`
const paddings = {
  "2xs": `${pxTo(20, baseFontSize, "em")} ${pxTo(30, ds.get("type.sizes.xs"), "em")}`,
  xs: `${pxTo(20, baseFontSize, "em")} ${pxTo(30, ds.get("type.sizes.xs"), "em")}`,
  sm: defaultPadding,
  md: defaultPadding,
  lg: defaultPadding,
  xl: defaultPadding,
}

const backgrounds = {
  primary: ds.get("colors.primary.pink"),
  secondary: ds.get("colors.primary.blue"),
  tertiary: ds.get("colors.primary.yellow"),
}

const colors = {
  primary: ds.get("colors.primary.light"),
  secondary: ds.get("colors.primary.light"),
  tertiary: ds.get("colors.primary.light"),
}
const routes = [homePath, teamPath, partiesPath]

const Button = (props) => {
  const { size, brand, block, isLink, styles, children } = props
  if (isLink === true) {
    if (!routes.includes(props.href)) {
      return (
        <a className={styles.default} {...props}>
          {children}
        </a>
      )
    } else {
      return (
        <Link className={styles.default} to={props.href}>
          {children}
        </Link>
      )
    }
  }
  return (
    <button className={styles.default} {...props}>
      {children}
    </button>
  )
}

const rules = {
  default: ({ size, block, brand }) => ({
    display: "inline-flex",
    justifyContent: "center",
    textDecoration: "none",
    alignItems: "center",
    textAlign: "center",
    padding: paddings[size],
    width: block ? "100%" : "auto",
    fontSize: pxTo(ds.get(`type.sizes.${size}`), baseFontSize, "rem"),
    textTransform: "uppercase",
    fontFamily: ds.get("type.fontFamily.bold"),
    letterSpacing: "0.15ch",
    backgroundColor: backgrounds[brand],
    border: 0,
    color: `${colors[brand]} !important`,
    borderRadius: pxTo(ds.get("borderRadius.pill"), ds.get(`type.sizes.${size}`), "em"),
  }),
}

export default connect(rules)(Button)
