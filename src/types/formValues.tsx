export enum SnackBarEnum {
    SUCCESS_MESSAGE = 'success',
    ERROR_MESSAGE = 'error',
    WARNING_MESSAGE = 'warning',
}

type InputFormDataType = 'email' | 'password' | 'passwordConfirmation'

export interface InputFormData {
    key: InputFormDataType
    inputText: string
    htmlFor: string
    type: string
}

export interface FormValues {
    email: string
    password: string
    passwordConfirmation?: string
}
