import { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    helperText?: string
    hasError?: boolean
    label?: React.ReactNode
}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
    ({ label, id, helperText, hasError = false, ...others }, ref) => {
        return (
            <Root>
                <InformationsWrapper>
                    <Label htmlFor={id}>{label}</Label>

                    {helperText && <HelperText $hasError={hasError}>{helperText}</HelperText>}
                </InformationsWrapper>
                <Input {...others} $hasError={hasError} id={id} ref={ref} />
            </Root>
        )
    }
)

const Root = styled.div`
    display: flex;
    flex-direction: column;
`

const InformationsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: ${({ theme }) => theme.fonts.roboto.weights[700]};
    justify-content: space-between;
    color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};
`

const Label = styled.label`
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
`

const HelperText = styled.span<{ $hasError: boolean }>`
    font-size: inherit;
    font-weight: inherit;
    color: ${({ theme }) => `hsl(${theme.colors.neutral.grey})`};

    ${({ $hasError }) =>
        $hasError &&
        css`
            color: ${({ theme }) => `hsl(${theme.colors.primary.tomato})`};
        `};
`

const Input = styled.input<{ $hasError: boolean }>`
    border: ${({ theme }) => `1px solid hsl(${theme.colors.neutral.grey}, 40%)`};
    border-radius: 8px;
    padding: 20px;
    font-family: ${({ theme }) => theme.fonts.roboto.name};
    font-size: 14px;
    outline: none;
    transition: 0.13s all;
    color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};

    &::placeholder {
        color: ${({ theme }) => `hsl(${theme.colors.neutral.grey})`};
    }

    &:hover {
        border-color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey}, 60%)`};
    }
    &:focus {
        border-color: ${({ theme }) => `hsl(${theme.colors.neutral.charcoalGrey})`};
    }

    ${({ $hasError }) =>
        $hasError &&
        css`
            background-color: ${({ theme }) => `hsl(${theme.colors.primary.tomato}, 20%)`};
            color: ${({ theme }) => `hsl(${theme.colors.primary.tomato})`};
            border-color: ${({ theme }) => `hsl(${theme.colors.primary.tomato}, 20%)`};

            &::placeholder {
                color: ${({ theme }) => `hsl(${theme.colors.primary.tomato}, 70%)`};
            }

            &:hover {
                border-color: ${({ theme }) => `hsl(${theme.colors.primary.tomato}, 60%)`};
            }

            &:focus {
                border-color: ${({ theme }) => `hsl(${theme.colors.primary.tomato})`};
            }
        `}
`
