import React, { PureComponent } from "react"
import { AppContext } from "app/contexts/App"
import dotize from "dotize"
import en from "app/translations/en"
import fr from "app/translations/fr"

class Translate extends PureComponent {
  state = {
    langs: {
      en: dotize.convert(en),
      fr: dotize.convert(fr),
    },
  }
  render() {
    const { langs } = this.state
    const { id } = this.props

    return <AppContext.Consumer>{(value) => langs[value.locale][id]}</AppContext.Consumer>
  }
}

export default Translate
