import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as FelaProvider } from "react-fela"
import App from "app/views"
import createRenderer from "app/styles"
import "index.css"

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app")
  app !== null &&
    ReactDOM.render(
      <FelaProvider renderer={createRenderer()}>
        <App />
      </FelaProvider>,
      app,
    )
})
