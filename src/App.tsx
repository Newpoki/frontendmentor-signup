import { useState } from 'react'
import { Signup } from './signup/signup'
import { Views } from './types/app'
import { SignupFormCompleted } from './signup/signup-form-completed'

export const App = () => {
    const [view, setView] = useState<Views>({ type: 'SIGNUP_FORM' })

    switch (view.type) {
        case 'SIGNUP_FORM':
            return <Signup setView={setView} />

        case 'SIGNUP_FORM_COMPLETED':
            return <SignupFormCompleted setView={setView} email={view.data.email} />

        default:
            return null
    }
}
