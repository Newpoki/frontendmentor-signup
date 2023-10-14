export const theme = {
    colors: {
        primary: {
            tomato: '4, 100%, 67%',
        },
        neutral: {
            darkSlateGrey: '234, 29%, 20%',
            charcoalGrey: '235, 18%, 26%',
            grey: '231, 7%, 60%',
            white: '0, 0%, 100%',
        },
    },
    fonts: {
        roboto: {
            name: 'Roboto',
            weights: {
                400: 400,
                700: 700,
            },
        },
    },
} as const

export type Theme = typeof theme
