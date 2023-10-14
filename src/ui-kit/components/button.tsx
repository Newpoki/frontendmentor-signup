import styled from 'styled-components'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: Props) => {
    return <Root {...props} />
}

const Root = styled.button`
    border: 1px solid transparent;
    background-color: ${({ theme }) => `hsl(${theme.colors.neutral.darkSlateGrey})`};
    color: ${({ theme }) => `hsl(${theme.colors.neutral.white})`};
    padding: 18px 20px;
    font-weight: ${({ theme }) => theme.fonts.roboto.weights[700]};
    font-size: 16px;
    border-radius: 8px;
    outline: none;

    &:focus {
        background: linear-gradient(to right, hsl(349, 100%, 84%), hsl(19, 100%, 76%));
    }

    &:hover {
        cursor: pointer;
        background: linear-gradient(to right, hsl(349, 100%, 64%), hsl(19, 100%, 56%));
        box-shadow: 1px 1px 5px hsl(4, 100%, 67%), 1px 17px 15px hsla(4, 100%, 87%, 0.5);
    }
`
