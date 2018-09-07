import React from "react"
import Translate from "views/components/wrappers/Translate"
import Container from "views/components/wrappers/Container"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"
import { connect } from "react-fela"
import ManagedText from "views/components/presentationals/ManagedText"
import CarouselTeam from "views/components/presentationals/CarouselTeam"
import { AppContext } from "app/contexts/App"

const Team = (props) => {
  const {} = props
  return (
    <Container>
      <AppContext.Consumer>{(value) => <CarouselTeam locale={value.locale} docs={value.docs} />}</AppContext.Consumer>
    </Container>
  )
}
export default Team
