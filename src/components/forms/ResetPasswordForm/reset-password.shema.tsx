import * as yup from 'yup';

export const resetPasswordScheme = yup.object().shape({
    password: yup
        .string()
        .required('Hasło jest wymagane')
        .min(8, 'Hasło musi mieć co najmniej 8 znaków'),
    passwordConfirmation: yup
        .string()
        .nullable()
        .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
});
