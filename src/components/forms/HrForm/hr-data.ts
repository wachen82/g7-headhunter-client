import { HrInputFormData } from '../../../types/hrFormValues'

export const HrDataArr: HrInputFormData[] = [
    {
        key: 'email',
        inputText: 'Email',
        htmlFor: 'email',
        type: 'email',
    },
    {
        key: 'fullName',
        inputText: 'Imię i nazwisko',
        htmlFor: 'fullName',
        type: 'fullName',
    },
    {
        key: 'company',
        inputText: 'Nazwa firmy',
        htmlFor: 'company',
        type: 'company',
    },
    {
        key: 'maxReservedStudents',
        inputText: 'Limit dla rezerwacji kursantów',
        htmlFor: 'maxReservedStudents',
        type: 'maxReservedStudents',
    },
]
