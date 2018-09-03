import React from "react"
import { NavLink } from "react-router-dom"
import Translate from "views/components/wrappers/Translate"

const Navigation = (props) => {
  const { links } = props
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={`navlink-${link.name}`}>
            <NavLink to={link.path}>
              <Translate id={link.transId} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
