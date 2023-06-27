import { IUserProfileEntity } from "types";

enum TypeWork {
    WHATEVER = 'Bez znaczenia',
}

enum ContractType {
    NOPREFERENCE = 'Brak preferencji',
}

enum Apprenticeship {
    NO = 'NIE',
}

export const defaultValues: IUserProfileEntity = {
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    githubUsername: '',
    portfolioUrls: [' '],
    projectUrls: ['', ''],
    bio: '',
    expectedTypeWork: TypeWork.WHATEVER,
    targetWorkCity: '',
    expectedContractType: ContractType.NOPREFERENCE,
    expectedSalary: 0,
    canTakeApprenticeship: Apprenticeship.NO,
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
};
