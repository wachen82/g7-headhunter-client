import React from 'react';
import { SingleGrade } from './SingleGrade';
import { Box } from '@mui/material';
import { UserProfilResponse } from 'types';

interface Props {
    courseCompletion: UserProfilResponse['profile']['skills']['courseCompletion'];
    courseEngagement: UserProfilResponse['profile']['skills']['courseEngagement'];
    projectDegree: UserProfilResponse['profile']['skills']['projectDegree'];
    teamProjectDegree: UserProfilResponse['profile']['skills']['teamProjectDegree'];
}

export const GradesBox = (props: Props) => {
    const {
        courseCompletion,
        courseEngagement,
        projectDegree,
        teamProjectDegree,
    } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                backgroundColor: '#222324',
                width: '1000px',
                height: '110px',
                padding: '10px 0 0 26px',
                margin: '0 0 12px 4px',
            }}
        >
            <SingleGrade
                gradeName={'Ocena przejścia kursu'}
                grade={courseCompletion}
            />
            <SingleGrade
                gradeName={`Ocena aktywności i zaangażowania na kursie`}
                grade={courseEngagement}
            />
            <SingleGrade
                gradeName={'Ocena kodu w projekcie własnym'}
                grade={projectDegree}
            />
            <SingleGrade
                gradeName={'Ocena pracy w zespole w Scrum'}
                grade={teamProjectDegree}
            />
        </Box>
    );
};
