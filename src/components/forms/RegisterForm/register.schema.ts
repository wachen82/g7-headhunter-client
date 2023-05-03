import * as yup from 'yup'
import { string } from 'yup'

export const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const userDataForm = yup.object().shape({
    email: yup
        .string()
        .required('Email jest wymagany')
        .email('Podaj prawidłowy adres e-mail'),
    phoneNumber: yup
        .string()
        .matches(phoneRegExp, 'Wpisany numer telefony nie jest prawidłowy'),
    firstName: yup.string().required('Imię jest wymagane'),
    lastName: yup.string().required('Nazwisko jest wymagane'),
})
export const expectedWorkForm = yup.object().shape({
    expectedTypeWork: yup
        .string()
        .required('Oczekiwany typ pracy jest wymagany'),
    targetWorkCity: yup.string(),
    expectedContractType: yup
        .string()
        .required('Rodzaj kontraktu jest wymagany'),
    expectedSalary: yup.number().positive(),
    canTakeApprenticeship: yup
        .string()
        .required('Odpowiedz TAK lub NIE')
        .default('NIE'),
})
export const portfolioForm = yup.object().shape({
    githubUsername: yup
        .string()
        .required('Nazwa użytkownika GitHub jest wymagana'),
    portfolioUrls: yup.array(string().url('Adress URL jest nieprawidłowy')),
    projectUrls: yup.array(
        string()
            .url('Adress URL jest nieprawidłowy')
            .required('Address url do projektu jest wymagany')
    ),
    bio: yup.string(),
    education: yup.string(),
    workExperience: yup.string(),
    courses: yup.string(),
    monthsOfCommercialExp: yup
        .number()
        .positive()
        .integer()
        .required('Ilość miesięcy jest wymagana'),
})
