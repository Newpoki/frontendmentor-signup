import styled from 'styled-components'
import { Button } from '../ui-kit/components/button'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import z from 'zod'
import { ControlledTextfield } from '../forms/controlled-textfield'
import { FormProvider } from '../forms/form-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import { Views } from '../types/app'

const signupFormSchema = z.object({
    email: z.string().email('Valid email required'),
})

type SignupFormValues = z.infer<typeof signupFormSchema>

const signupFormDefaultValues: SignupFormValues = {
    email: '',
}

type Props = {
    setView: React.Dispatch<React.SetStateAction<Views>>
}

export const SignupForm = ({ setView }: Props) => {
    const formContext = useForm<SignupFormValues>({
        defaultValues: signupFormDefaultValues,
        shouldUseNativeValidation: false,
        resolver: zodResolver(signupFormSchema),
    })

    const handleSubmit = useCallback(
        (formValues: SignupFormValues) => {
            setView({ type: 'SIGNUP_FORM_COMPLETED', data: { email: formValues.email } })
        },
        [setView]
    )

    return (
        <Root formContext={formContext} onSubmit={handleSubmit}>
            <ControlledTextfield
                name="email"
                placeholder="email@company.com"
                label="Email address"
                type="email"
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
