type HrInputFormDataType =
    | 'email'
    | 'fullName'
    | 'company'
    | 'maxReservedStudents'

export interface HrInputFormData {
    key: HrInputFormDataType
    inputText: string
    htmlFor: string
    type: string
}

export interface HrFormValues {
    email: string
    fullName: string
    company: string
    maxReservedStudents: string
}
