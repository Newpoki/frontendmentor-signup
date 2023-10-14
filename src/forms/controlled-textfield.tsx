import { Textfield, TextfieldProps } from '../ui-kit/components/textfield'
import { useFormContext } from 'react-hook-form'

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

export const ControlledTextfield = ({ name, ...others }: Props) => {
    const { register } = useFormContext()

    return <Textfield {...register(name)} {...others} name={name} />
}
