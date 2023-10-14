type SignupFormView = {
    type: 'SIGNUP_FORM'
}

type SignupFormCompletedView = {
    type: 'SIGNUP_FORM_COMPLETED'
    data: {
        email: string
    }
}

export type Views = SignupFormView | SignupFormCompletedView
