import React from "react"
import locales from "app/translations"

const SwitchLanguage = (props) => {
  const { handleSwitchLanguage } = props
  return (
    <ul>
      {locales.map((locale) => (
        <li key={`translate-to-${locale}`}>
          <button
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

export default SwitchLanguage
