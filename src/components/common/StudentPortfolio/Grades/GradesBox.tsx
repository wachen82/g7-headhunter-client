import React from 'react'
import { SingleGrade } from './SingleGrade'
import { Box } from '@mui/material'

export const GradesBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                backgroundColor: '#222324',
                width: '1176px',
                height: '110px',
                padding: '10px 0 0 26px',
                margin: '0 0 12px 4px',
            }}
        >
            <SingleGrade gradeName={'Ocena przejścia kursu'} grade={5} />
            <SingleGrade
                gradeName={`Ocena aktywności i zaangażowania na kursie`}
                grade={4}
            />
            <SingleGrade
                gradeName={'Ocena kodu w projekcie własnym'}
                grade={5}
            />
            <SingleGrade
                gradeName={'Ocena pracy w zespole w Scrum'}
                grade={4}
            />
        </Box>
    )
}
