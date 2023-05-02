import * as yup from 'yup'

export const logInSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email jest wymagany')
        .email('Podaj prawidłowy adres e-mail'),
    password: yup.string().required('Hasło jest wymagane'),
})
