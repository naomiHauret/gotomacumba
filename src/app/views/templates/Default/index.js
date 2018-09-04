import React, { Fragment } from "react"
import Header from "app/views/components/layouts/Header"
import Footer from "app/views/components/layouts/Footer"
import ScrollToTopOnMount from "app/views/components/layouts/ScrollToTopOnMount"
import { LocaleContext } from "app/contexts/Locale"
import { withState, compose } from "recompose"

const withDefinedLocale = withState("locale", "setLocale", "en")
const Default = (props) => {
  const { locale, setLocale, children } = props

  return (
    <LocaleContext.Provider value={locale}>
      <ScrollToTopOnMount />
      <Header switchLanguage={setLocale} />
      <Fragment>
        {children}
      </Fragment>
      <Footer />
    </LocaleContext.Provider>
  )
}

export default compose(withDefinedLocale)(Default)
