import styled from 'styled-components'
import { Button } from '../ui-kit/components/button'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import z from 'zod'
import { ControlledTextfield } from '../forms/controlled-textfield'
import { FormProvider } from '../forms/form-provider'

const signupFormSchema = z.object({
    email: z.string().email('Valid email required'),
})

type SignupFormValues = z.infer<typeof signupFormSchema>

export const SignupForm = () => {
    const formContext = useForm<SignupFormValues>()

    const handleSubmit = useCallback(() => {
        console.log('submit')
    }, [])

    return (
        <Root formContext={formContext} onSubmit={handleSubmit}>
            <ControlledTextfield
                name="email"
                placeholder="email@company.com"
                label="Email address"
            />

            <Button>Subscribe to monthly newsletter</Button>
        </Root>
    )
}

const Root = styled(FormProvider)`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
