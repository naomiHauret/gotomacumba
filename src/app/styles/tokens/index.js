import DesignSystem from "design-system-utils"

const palette = {
  primary: {
    dark: "hsl(267, 38.7%, 14.7%)",
    light: "hsl(0, 0%, 100%)",
    pink: "hsl(303, 100%, 67%)",
    blue: "hsl(181, 79%, 54%)",
    yellow: "hsl(47, 95%, 52%)",
  },
  secondary: {
    light: "hsl(229, 14%, 30%)",
    dark: "hsl(254, 45%, 23%)",
  },
  "50p": {
    //50 percent transparent
    light: "hsla(0, 0%, 100%, 0.5)",
    pink: "hsla(303, 100%, 67%, 0.5)",
    blue: "hsla(181, 79%, 54%, 0.5)",
    yellow: "hsla(47, 95%, 52%, 0.5)",
  },
  macumba: {
    pink: "hsl(300,100%,50%)",
    purple: "hsl(247, 58%, 54%)",
    blue: "hsl(242, 100%, 50%)",
    pink80p: "hsla(300,100%,50%, 0.8)",
    black: "hsl(0, 0%, 0%)",
  },
}

//
// Design system
// Units are in px
//
export const myDesignSystem = {
  // Typography related
  // font size, weight, line-height, family
  type: {
    baseFontSize: 18,
    sizes: {
      "2xs": 11,
      xs: 14,
      sm: 16,
      base: 18,
      md: 20,
      lg: 24,
      xl: 36,
      "2xl": 36,
      "3xl": 48,
    },
    fontFamily: {
      base: '"Gotham-Regular","system"',
      semibold: '"Gotham-Medium", "system-medium"',
      bold: '"Gotham-Bold", "system-bold"',
      black: '"Gotham-Black", "system-bold"',
    },
    lineHeight: {},
    fontWeight: {},
  },

  // Color related
  // colors, backgrounds
  colors: {
    ...palette,
    brand: {
      spotify: "hsl(141, 73%, 42%)",
    },
  },
  borderRadius: {
    pill: 100,
  },
  // Layout related
  // Breakpoints, z-index, grid
  breakpoints: {
    xs: 586,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1366,
    "2xl": 1440,
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  grid: {
    columns: 12,
    gutterWidth: 30,
    width: {
      sm: 750,
      md: 970,
      lg: 1170,
      xl: 1230,
      "2xl": 1366,
    },
  },

  // Spacing related
  // Paddings, margins
  spacing: {},
}

export const ds = new DesignSystem(myDesignSystem, {
  fontSizeUnit: "rem",
})
