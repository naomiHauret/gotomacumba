import DesignSystem from 'design-system-utils'

//
// Design system
// Units are in px
//
export const myDesignSystem = {
    // Typography related
    // font size, weight, line-height, family
    type: {
        baseFontSize: 16,
        sizes: {
            xs: 12,
            s: 14,
            base: 16,
            m: 18,
            l: 20,
            xl: 24,
            xxl: 36,
            txl: 48,
            qxl: 56,
        },
        fontFamily: {},
        lineHeight: {},
        fontWeight: {},
    },

    // Color related
    // colors, backgrounds
    colors: {
        brand: {
            red: '#e82219',
            deeporange: '#ff7200',
            orange: '#ff9500',
            green: '#c4d000',
            teal: '#1aa5c8',
            navy: '#0052da',
        },
    },

    // Layout related
    // Breakpoints, z-index, grid
    breakpoints: {
        xs: 586,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1366,
        xxl: 1440
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
            xxl: 1366,
        },
    },

    // Spacing related
    // Paddings, margins
    spacing: {},

}

export const ds = new DesignSystem(myDesignSystem, {
    fontSizeUnit: 'rem',
})