import styled, { WebTarget } from 'styled-components'

type Props = React.HTMLAttributes<HTMLHeadElement> & {
    forwardedAs?: WebTarget
}

export const Text = (props: Props) => {
    return <Root {...props} />
}

const Root = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    & strong {
        font-weight: ${({ theme }) => theme.fonts.roboto.weights[700]};
    }
`
