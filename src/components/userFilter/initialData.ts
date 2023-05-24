import { FilterValues } from '../../types/filterData';

export const initialFilterData:FilterValues = {
    courseCompletion: 0,
    courseEngagement: 0,
    projectDegree: 0,
    teamProjectDegree: 0,
    expectedTypeWork: '',
    expectedContractType: '',
    expectedSalaryFrom: '',
    expectedSalaryTo: '',
    canTakeApprenticeship: '',
    monthsOfCommercialExp: '',
};
export const expectedTypeWorkOptions = ['Na miejscu', 'Gotowość do przeprowadzki', 'Wyłącznie zdalnie', 'Hybrydowo', 'Bez znaczenia'];
export const expectedContractTypeOptions = ['Tylko UoP', 'Możliwe B2B', 'Możliwe UZ/UoD', 'Brak preferencji'];
