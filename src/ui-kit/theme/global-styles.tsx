import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body  {
        font-size: 16px;
        font-weight: ${({ theme }) => theme.fonts.roboto.weights[400]};
        background-color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};
        color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};
        font-family: ${({ theme }) => theme.fonts.roboto.name};
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100dvh;
        width: 100dvw;
    }
`
