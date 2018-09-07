import React, { Fragment } from "react"
import Prismic from "prismic-javascript"
import { apiEndpoint, accessToken } from "app/cms"
import config from "app/cms"
import { compose, withState, lifecycle } from "recompose"
import Header from "app/views/components/layouts/Header"
import Footer from "app/views/components/layouts/Footer"
import ScrollToTopOnMount from "app/views/components/layouts/ScrollToTopOnMount"
import { AppContext } from "app/contexts/App"

const withDefinedLocale = withState("locale", "setLocale", "en")
const withFetchedContent = compose(
  withState("docs", "", null),
  lifecycle({
    componentWillMount() {
      Prismic.api(config.apiEndpoint).then((api) => {
        api.query("", { lang: "*" }).then((response) => {
          if (response) {
            this.setState({
              docs: {
                en: response.results.filter((doc) => doc.uid.includes("en--_")),
                fr: response.results.filter((doc) => doc.uid.includes("fr--_")),
              },
            })
          }
        })
      })
    },
  }),
)
const Default = (props) => {
  const { locale, setLocale, docs, children } = props

  return (
    <AppContext.Provider value={{ locale: locale, docs: docs }}>
      <ScrollToTopOnMount />
      <Header switchLanguage={setLocale} />
      <Fragment>{children}</Fragment>
      <Footer />
    </AppContext.Provider>
  )
}

export default compose(
  withDefinedLocale,
  withFetchedContent,
)(Default)
