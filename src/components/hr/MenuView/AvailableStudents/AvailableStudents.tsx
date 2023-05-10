import { ButtonsAndInputView } from '../ButtonAndInputView/ButtonsAndInputView'
import { Container, Divider } from '@mui/material';
import theme from '../../../../theme';
import { CustomAccordion, UserAndSkills } from '../../../common/Accordion/CustomAccordion';
import React from 'react';
const users: UserAndSkills[] = [
    {
        id: '1',
        firstName: 'Jan',
        lastName: 'Kowalski',
        courseCompletion: 4,
        courseEngagement: 2,
        projectDegree: 3,
        teamProjectDegree: 4,
        expectedTypeWork: 'Na miejscu',
        targetWorkCity: 'Rzym',
        expectedContractType: 'Tylko UoP',
        expectedSalary: '10000',
        canTakeApprenticeship: 'NIE',
        monthsOfCommercialExp: 0,
    },
    {
        id: '2',
        firstName: 'Anna',
        lastName: 'Nowak',
        courseCompletion: 5,
        courseEngagement: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: 'Zdalnie',
        targetWorkCity: 'Kraków',
        expectedContractType: 'Umowa o pracę lub B2B',
        expectedSalary: '12000',
        canTakeApprenticeship: 'TAK',
        monthsOfCommercialExp: 12,
    },
    {
        id: '3',
        firstName: 'Piotr',
        lastName: 'Nowicki',
        courseCompletion: 3,
        courseEngagement: 2,
        projectDegree: 2,
        teamProjectDegree: 3,
        expectedTypeWork: 'Zdalnie lub na miejscu',
        targetWorkCity: 'Warszawa',
        expectedContractType: 'Umowa o pracę',
        expectedSalary: '8000',
        canTakeApprenticeship: 'NIE',
        monthsOfCommercialExp: 6,
    },
];
export const AvailableStudents = () => {
    return (
        <>
            <ButtonsAndInputView />
            <Container>
                <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
                <CustomAccordion users={users}/>
            </Container>
        </>
    )
}
