import * as yup from 'yup'

export const hrSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email jest wymagany')
        .max(64,'Email nie może być dłuższy niż 64 znaki'),
    fullName: yup
        .string()
        .required('Imię i nazwisko jest wymagane'),
    company: yup
        .string()
        .required('Nazwa firmy jest wymagana'),
    maxReservedStudents: yup
        .string()
        .required('Podanie limitu dla rezerwacji jest wymagane')

})
