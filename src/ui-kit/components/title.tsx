import styled, { css } from 'styled-components'

type Props = React.HTMLAttributes<HTMLHeadElement>

export const Title = (props: Props) => {
    return <Root {...props} />
}

const Root = styled.h1`
    color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};
    font-size: 40px;
    font-weight: ${({ theme }) => theme.fonts.roboto.weights[700]};

    ${({ theme }) => css`
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
            font-size: 56px;
        }
    `}
`
