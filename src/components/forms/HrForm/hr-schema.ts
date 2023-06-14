import * as yup from 'yup';

const maxReservedStudents = /^(?!0{3})[1-9][0-9]{0,2}$/;

export const hrSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email jest wymagany')
        .email('Podaj prawidłowy adres e-mail')
        .max(64, 'Email nie może być dłuższy niż 64 znaki'),
    fullName: yup
        .string()
        .required('Imię i nazwisko jest wymagane'),
    company: yup
        .string()
        .required('Nazwa firmy jest wymagana'),
    maxReservedStudents: yup
        .string()
        .required('Podanie limitu dla rezerwacji kursanów jest wymagane')
        .matches(maxReservedStudents, 'Wpisany limit nie jest w zakresie od 1 do 999'),
});
