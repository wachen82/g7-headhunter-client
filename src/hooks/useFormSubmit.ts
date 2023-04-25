import { FieldValues, SubmitHandler } from 'react-hook-form'
import { FormMethod, useSubmit } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface UseFormSubmitOptions<T extends FieldValues> {
    reset?: () => void
    method: FormMethod
}

export type UseFormSubmitReturnType<T extends FieldValues> = {
    onSubmit: SubmitHandler<T>
}

export function useFormSubmit<T extends FieldValues>(
    options: UseFormSubmitOptions<T>
): UseFormSubmitReturnType<T> {
    const { reset, method } = options
    const submit = useSubmit()

    const onSubmit: SubmitHandler<T> = (data: T) => {
        submit({ ...data }, { method })
        if (reset) {
            reset()
        }
    }

    return { onSubmit }
}
