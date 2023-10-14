import { Page } from '../ui-kit/components/page'
import SuccessIcon from '../ui-kit/assets/icon-success.svg'
import { Button } from '../ui-kit/components/button'
import styled, { css } from 'styled-components'
import { useCallback, useEffect } from 'react'
import { Views } from '../types/app'
import { Title } from '../ui-kit/components/title'
import { Text } from '../ui-kit/components/text'

type Props = {
    email: string
    setView: React.Dispatch<React.SetStateAction<Views>>
}

export const SignupFormCompleted = ({ email, setView }: Props) => {
    const handleDismiss = useCallback(() => {
        setView({ type: 'SIGNUP_FORM' })
    }, [setView])

    useEffect(() => {
        document.title = 'Newsletter - Success signup'
    }, [])

    return (
        <Root>
            <SuccessImage
                src={SuccessIcon}
                width={64}
                alt="A white check icon in an orange circle"
            />

            <StyledTitle>Thanks for subscribing!</StyledTitle>

            <EmailSentText forwardedAs="h2">
                A confirmation email has been sent to <strong>{email}</strong>. Please open it and
                click the button inside to confirm your subscription
            </EmailSentText>

            <DismissMessageButton type="button" onClick={handleDismiss}>
                Dismiss message
            </DismissMessageButton>
        </Root>
    )
}

const Root = styled(Page)`
    padding: 30px 24px 40px;

    ${({ theme }) => css`
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
            padding: 48px;
            max-width: 370px;
        }
    `}
`

const SuccessImage = styled.img`
    margin-bottom: 40px;
    margin-top: 100px;

    ${({ theme }) => css`
        @media screen and (min-width: ${theme.breakpoints.desktop}px) {
            margin-top: 0;
        }
    `}
`

const StyledTitle = styled(Title)`
    margin-bottom: 24px;
`

const EmailSentText = styled(Text)`
    padding-bottom: 24px;
`

const DismissMessageButton = styled(Button)`
    margin-top: auto;
`
