import "babel-polyfill"
import React, { Fragment } from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider as FelaProvider } from 'react-fela'
import createRenderer from "app/styles"
import "index.css"
import { connect as styleConnect } from "react-fela"
import MyComponent from "app/views/components/presentationals/MyComponent"
import App from "app/views"

document.addEventListener('DOMContentLoaded', () => {
    const renderer = createRenderer()
    const app = document.querySelector("#app")
    app !== null && render(
        <FelaProvider renderer={renderer}>
            <BrowserRouter>
                <Fragment>
                    <App />
                </Fragment>
            </BrowserRouter>
        </FelaProvider>
    , app)
})

