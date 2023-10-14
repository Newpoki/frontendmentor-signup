import styled from 'styled-components'
import { Button } from '../ui-kit/components/button'
import { Textfield } from '../ui-kit/components/textfield'

export const SignupForm = () => {
    return (
        <Root>
            <Textfield placeholder="email@company.com" label="Email address" />

            <Button>Subscribe to monthly newsletter</Button>
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
