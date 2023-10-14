import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.fonts.roboto.name};
        font-size: 16px;
        font-weight: ${({ theme }) => theme.fonts.roboto.weights[400]};
        background-color: ${({ theme }) => theme.colors.neutral.charcoalGrey};
    }
`
