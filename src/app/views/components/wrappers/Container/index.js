import { createComponent } from "react-fela"
import { mapValueToMediaQuery } from "fela-tools"
import { ds } from "app/styles/tokens"
import { pxTo } from "design-system-utils"

export default createComponent((props) => {
  const { contained } = props
  const baseFontSize = ds.get("type.baseFontSize")
  return {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    ...props,
    extend: [
      mapValueToMediaQuery(
        {
          sm: pxTo(ds.get("grid.width.sm"), baseFontSize, "rem"),
          md: pxTo(ds.get("grid.width.md"), baseFontSize, "rem"),
          lg: pxTo(ds.get("grid.width.lg"), baseFontSize, "rem"),
          xl: pxTo(ds.get("grid.width.xl"), baseFontSize, "rem"),
          "2xl": pxTo(ds.get("grid.width.2xl"), baseFontSize, "rem"),
        },
        (value) => ({ width: contained === true ? value : "100%" }),
      ),
    ],
  }
})
