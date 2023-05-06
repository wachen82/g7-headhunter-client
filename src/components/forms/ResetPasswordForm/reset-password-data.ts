import { InputFormData } from '../../../types/formValues';

export const resetPasswordData: InputFormData[] = [
    {
        key: 'password',
        inputText: 'Hasło',
        htmlFor: 'password',
        type: 'password',
    },
    {
        key: 'passwordConfirmation',
        inputText: 'Powtórz hasło',
        htmlFor: 'password',
        type: 'password',
    },
];
