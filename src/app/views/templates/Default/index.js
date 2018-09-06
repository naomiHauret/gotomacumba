import React, { Fragment } from "react"
import Prismic from "prismic-javascript"
import { apiEndpoint, accessToken } from "app/cms"
import config from "app/cms"
import { compose, withState, lifecycle } from "recompose"
import Header from "app/views/components/layouts/Header"
import Footer from "app/views/components/layouts/Footer"
import ScrollToTopOnMount from "app/views/components/layouts/ScrollToTopOnMount"
import { LocaleContext } from "app/contexts/Locale"
import { ContentContext } from "app/contexts/Content"

const withDefinedLocale = withState("locale", "setLocale", "en")
const withFetchedContent = compose(
  withState("doc", "", null),
  lifecycle({
    componentWillMount() {
      Prismic.api(config.apiEndpoint).then((api) => {
        api.query("", { lang: "*" }).then((response) => {
          if (response) {
            this.setState({ doc: response.results })
          }
        })
      })
    },
  }),
)
const Default = (props) => {
  const { locale, setLocale, doc, children } = props

  return (
    <LocaleContext.Provider value={locale}>
      <ContentContext.Provider value={doc}>
        <ScrollToTopOnMount />
        <Header switchLanguage={setLocale} />
        <Fragment>{children}</Fragment>
        <Footer />
      </ContentContext.Provider>
    </LocaleContext.Provider>
  )
}

export default compose(
  withDefinedLocale,
  withFetchedContent,
)(Default)
