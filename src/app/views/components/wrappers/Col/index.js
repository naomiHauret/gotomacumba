import { createComponent } from 'inferno-fela'
import { mapValueToMediaQuery } from 'fela-tools'

export default createComponent((props) => {
  const { baseWidth, responsiveWidths } = props

  return {
    gridColumn: `span ${baseWidth}`,
    ...props,
    extend: [
      mapValueToMediaQuery(responsiveWidths, value => ({ gridColumn: `span ${value}` }))
    ]
  }
})
