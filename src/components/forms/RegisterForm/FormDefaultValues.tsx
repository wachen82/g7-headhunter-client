import { Apprenticeship, ContractType, IUserProfileEntity, TypeWork } from "types";

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
