import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider as FelaProvider } from "react-fela"
import App from "app/views"
import createRenderer from "app/styles"
import "index.css"

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app")
  app !== null &&
    render(
      <FelaProvider renderer={createRenderer()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FelaProvider>,
      app,
    )
})
