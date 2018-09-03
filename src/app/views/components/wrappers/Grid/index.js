import { createComponent } from 'inferno-fela'
import { mapValueToMediaQuery } from 'fela-tools'
import { ds } from 'style/tokens'
import { pxTo } from 'design-system-utils'


export default createComponent(props => {
  const { col, gutterWidth, justify, items, contained } = props
  const baseFontSize = ds.get('type.baseFontSize')
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${col ? col : ds.get("grid.columns")}, 1fr)`,
    gridTemplateRows: "auto 1fr auto",
    gridColumnGap: gutterWidth ? gutterWidth : pxTo(ds.get("grid.gutterWidth"), baseFontSize, "rem"),
    maxWidth: "100%",
    border: "solid red 1px",
    marginLeft: "auto",
    marginRight: "auto",
    extend: [
      mapValueToMediaQuery({
        sm: "750px",
        md: "970px",
        lg: "1000px",
      }, value => ({ maxWidth: contained === true ? value : "100%" }))
    ]
  }
})
