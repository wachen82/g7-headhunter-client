export enum SnackBarEnum {
    SUCCESS_MESSAGE = 'success',
    ERROR_MESSAGE = 'error',
    WARNING_MESSAGE = 'warning',
}

type InputFormDataType = 'email' | 'password'

export interface InputFormData {
    key: string
    inputText: string
    htmlFor: string
    type: InputFormDataType
}

export interface FormValues {
    email: string
    password: string
}
