import * as yup from 'yup'
import { object, string } from 'yup'

export const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = [
    yup.object().shape({
        email: yup
            .string()
            .required('Email jest wymagany')
            .email('Podaj prawidłowy adres e-mail'),
        phoneNumber: yup
            .string()
            .email('Wpisany numer telefony nie jest prawidłowy'),
        firstName: yup.string().required('Imię jest wymagane'),
        lastName: yup.string().required('Nazwisko jest wymagane'),
        githubUsername: yup
            .string()
            .required('Nazwa użytkownika GitHub jest wymagana'),
    }),

    yup.object().shape({
        portfolioUrls: yup.array(object()),
        projectUrls: yup.array(
            string().url().required('Address url do projektu jest wymagany')
        ),
        bio: yup.string(),
        education: yup.string(),
        workExperience: yup.string(),
        courses: yup.string(),
        monthsOfCommercialExp: yup
            .number()
            .min(0)
            .integer()
            .required('Ilość miesięcy jest wymagana'),
    }),
    yup.object().shape({
        expectedTypeWork: yup
            .string()
            .required('Oczekiwany typ pracy jest wymagany'),
        targetWorkCity: yup.string(),
        expectedContractType: yup
            .string()
            .required('Rodzaj kontraktu jest wymagany'),
        expectedSalary: yup.string().min(0),
        canTakeApprenticeship: yup.string().required('Odpowiedz TAK lub NIE'),
    }),
]
