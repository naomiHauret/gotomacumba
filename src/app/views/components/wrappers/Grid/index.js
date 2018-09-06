import { createComponent } from "react-fela"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"

export default createComponent((props) => {
  const { col, gutterWidth, colBaseWidth } = props
  const baseFontSize = ds.get("type.baseFontSize")
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${col ? col : ds.get("grid.columns")}, ${colBaseWidth ? colBaseWidth : "1fr"})`,
    gridTemplateRows: "auto 1fr auto",
    gridColumnGap: gutterWidth ? gutterWidth : pxTo(ds.get("grid.gutterWidth"), baseFontSize, "rem"),
    ...props,
  }
})
