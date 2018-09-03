import React, { PureComponent } from "react"
import { LocaleContext } from "app/contexts/Locale"
import dotize from "dotize"
import en from "app/translations/en";
import fr from "app/translations/fr"

class Translate extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      langs: {
        en: dotize.convert(en),
        fr: dotize.convert(fr),
      }
    }
  }
  render() {
    const {langs} = this.state
    const {id} = this.props

    return <LocaleContext.Consumer>{(value) => langs[value][id]}</LocaleContext.Consumer>
  }
}

export default Translate