import React from "react"
import { Route } from "react-router-dom"
import { LocaleContext } from "app/contexts/Locale"
import { withState, compose } from "recompose"
import MyComponent from "app/views/components/presentationals/MyComponent"
import Translate from "app/views/components/wrappers/Translate"
import routes from "app/routes"
const withDefinedLocale = withState('locale', 'setLocale','en')


const App = (props) => {
  const {locale, setLocale} = props
  return <LocaleContext.Provider value={locale}>
      <MyComponent changeLanguage={setLocale} />
      <p>{locale}</p>
      <Translate id="ui.hello" />
      {routes.map((route) => <Route key={route.path} {...route} />)}
    </LocaleContext.Provider>
}

export default compose(withDefinedLocale)(App)