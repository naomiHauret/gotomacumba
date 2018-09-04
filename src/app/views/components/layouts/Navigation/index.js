import React from "react"
import { NavLink } from "react-router-dom"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import Translate from "views/components/wrappers/Translate"
import { connect } from "react-fela"

const Navigation = (props) => {
  const { links, styles } = props
  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={`navlink-${link.name}`}>
            <NavLink to={link.path} className={styles.link}>
              <Translate id={link.transId} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const baseFontSize = ds.get("type.baseFontSize")
const rules = {
  list: () => ({
    display: "flex",
    alignItems: "center",
  }),
  link: () => ({
    textDecoration: "none",
  }),
}

export default connect(rules)(Navigation)
