import * as yup from 'yup'

export const resetPasswordEmailScheme = yup.object().shape({
    email: yup
        .string()
        .required('Email jest wymagany')
        .email('Podaj prawidłowy adres e-mail'),
})
