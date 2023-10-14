import styled, { css } from 'styled-components'

type Props = React.HTMLAttributes<HTMLDivElement>

export const Page = (props: Props) => {
    return <Root {...props} />
}

const Root = styled.div`
    background-color: ${({ theme }) => `hsl(${theme.colors.neutral.white})`};
    flex: 1;
    display: flex;
    flex-direction: column;

    ${({ theme }) => css`
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
            flex: initial;
            margin: auto;
            border-radius: 32px;
            padding: 24px;
        }
    `}
`
