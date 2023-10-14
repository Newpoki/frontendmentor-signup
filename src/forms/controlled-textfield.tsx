import { Textfield, TextfieldProps } from '../ui-kit/components/textfield'
import { Controller, useFormContext } from 'react-hook-form'

type Props = Omit<
    TextfieldProps,
    | 'name'
    | 'onChange'
    | 'onBlur'
    | 'ref'
    | 'name'
    | 'min'
    | 'max'
    | 'maxLength'
    | 'minLength'
    | 'pattern'
    | 'required'
    | 'disabled'
> & {
    name: string
}

export const ControlledTextfield = ({ name, helperText, ...others }: Props) => {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Textfield
                    {...others}
                    {...field}
                    hasError={error?.message != null}
                    name={name}
                    helperText={error?.message ?? helperText}
                />
            )}
        />
    )
}
