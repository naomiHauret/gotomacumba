import { createRenderer } from "fela"
import { mapValueToMediaQuery } from "fela-tools"

// Fela plugins (exact order)
import extend from "fela-plugin-extend"
import embedded from "fela-plugin-embedded"
import prefixer from "fela-plugin-prefixer"
import fallbackValue from "fela-plugin-fallback-value"
import namedKeys from "fela-plugin-named-keys"
import { ds } from "styles/tokens"
import { pxTo } from "design-system-utils"
import customCursor from "assets/images/cursor.png"
import customPointerCursor from "assets/images/click.png"

const baseFontSize = ds.get("type.baseFontSize")
const xxsOnlyBreakpoint = pxTo(ds.bp("xs") - 1, baseFontSize, "rem")
const xsBreakpoint = pxTo(ds.bp("xs"), baseFontSize, "rem")
const smBreakpoint = pxTo(ds.bp("sm"), baseFontSize, "rem")
const mdBreakpoint = pxTo(ds.bp("md"), baseFontSize, "rem")
const lgBreakpoint = pxTo(ds.bp("lg"), baseFontSize, "rem")
const xlBreakpoint = pxTo(ds.bp("xl"), baseFontSize, "rem")
const xxlBreakpoint = pxTo(ds.bp("2xl"), baseFontSize, "rem")

const namedKeysPlugin = namedKeys({
  xxsOnly: `@media (min-width: ${xxsOnlyBreakpoint})`,
  xs: `@media (min-width: ${xsBreakpoint})`,
  sm: `@media (min-width: ${smBreakpoint})`,
  md: `@media (min-width: ${mdBreakpoint})`,
  lg: `@media (min-width: ${lgBreakpoint})`,
  xl: `@media (min-width: ${xlBreakpoint})`,
  "2xl": `@media (min-width: ${xxlBreakpoint})`,
})

/*
**
*** Fela renderer config
*** plugins order matters !
**
*/

export default () => {
  const renderer = createRenderer({
    plugins: [extend(), embedded(), namedKeysPlugin, prefixer(), fallbackValue()],
  })

  renderer.renderStatic({ cursor: `url(${customCursor}) 97 8, auto` }, "*")

  renderer.renderStatic(
    {
      fontFamily: ds.get("type.fontFamily.base"),
      fontSize: `${baseFontSize}px`,
    },
    "html",
  )

  renderer.renderStatic(
    {
      "--fsBelowDesktop": `${ds.get("type.sizes.m")}px`,
    },
    ":root",
  )

  return renderer
}
