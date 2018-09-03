import React from "react"
import { lifecycle } from "recompose"

const ScrollToTopOnMount = () => null

export default lifecycle({
  componentDidMount() {
    window.scrollTo(0, 0)
  },
})(ScrollToTopOnMount)
