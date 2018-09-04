import React from "react"
import { connect } from "react-fela"
import locales from "app/translations"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"

const SwitchLanguage = (props) => {
  const { handleSwitchLanguage, styles } = props
  return (
    <ul className={styles.list}>
      {locales.map((locale) => (
        <li key={`translate-to-${locale}`}>
          <button
            className={styles.button}
            locale={locale}
            onClick={(e) => {
              e.preventDefault()
              handleSwitchLanguage(e.currentTarget.getAttribute("locale"))
            }}
          >
            {locale}
          </button>
        </li>
      ))}
    </ul>
  )
}

const baseFontSize = ds.get("type.baseFontSize")
const rules = {
  list: () => ({
    display: "flex",
  }),
  button: () => ({
    fontFamily: "inherit",
    background: "transparent",
    border: 0,
  }),
}

export default connect(rules)(SwitchLanguage)
