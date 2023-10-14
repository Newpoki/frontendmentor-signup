import {
    FieldValues,
    FormProvider as RHFFormProvider,
    SubmitHandler,
    UseFormReturn,
} from 'react-hook-form'

type Props<TFieldValues extends FieldValues> = Omit<
    React.HTMLAttributes<HTMLFormElement>,
    'onSubmit'
> & {
    onSubmit: SubmitHandler<TFieldValues>
    formContext: UseFormReturn<TFieldValues>
}

export function FormProvider<TFieldValues extends FieldValues>({
    formContext,
    onSubmit,
    ...others
}: Props<TFieldValues>) {
    return (
        <RHFFormProvider {...formContext}>
            <form {...others} onSubmit={formContext.handleSubmit(onSubmit)} />
        </RHFFormProvider>
    )
}
