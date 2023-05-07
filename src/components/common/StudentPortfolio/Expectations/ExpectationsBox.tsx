import React from 'react'
import { Box } from '@mui/material'
import { SingleExpectation } from './SingleExpectation'

export const ExpectationsBox = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#222324',
                width: '1176px',
                margin: '0 0 12px 4px',
                '& :last-child': {
                    border: 'none',
                },
            }}
        >
            <SingleExpectation
                expectationName={'Preferowane miejsce pracy'}
                userExpectation={'Biuro'}
            />
            <SingleExpectation
                expectationName={
                    'Docelowe miasto, gdzie chce pracować kandydat'
                }
                userExpectation={'Warszawa'}
            />
            <SingleExpectation
                expectationName={'Oczekiwany typ kontraktu'}
                userExpectation={'Umowa o pracę'}
            />
            <SingleExpectation
                expectationName={'Oczekiwane wynagrodzenie miesięczne netto'}
                userExpectation={'8 000 zł'}
            />
            <SingleExpectation
                expectationName={
                    'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
                }
                userExpectation={'TAK'}
            />
            <SingleExpectation
                expectationName={'Komercyjne doświadczenie w programowaniu'}
                userExpectation={'6 miesięcy'}
            />
        </Box>
    )
}
