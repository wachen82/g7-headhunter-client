import React from 'react';
import { Box } from '@mui/material';
import { SingleGradeFilter } from './SingleGradeFilter';

export const GradesFilterBox = () => {
    return (
        <Box>
            <SingleGradeFilter text={'Ocena przejścia kursu'} />
            <SingleGradeFilter
                text={'Ocena aktywności i zaangażowania na kursie'}
            />
            <SingleGradeFilter text={'Ocena kodu w projekcie własnym'} />
            <SingleGradeFilter text={'Ocena pracy w zespole w Scrum'} />
        </Box>
    );
};
