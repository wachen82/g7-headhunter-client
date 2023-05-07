import React from 'react'
import { Box } from '@mui/material'
import { SingleExpectation } from './SingleExpectation'

interface Props {
    preferredWorkPlace: string
    preferredCity: string
    preferredContract: string
    preferredSalary: number
    freeInternship: string
    experience: number
}

export const ExpectationsBox = (props: Props) => {
    const {
        preferredWorkPlace,
        preferredCity,
        preferredContract,
        preferredSalary,
        freeInternship,
        experience,
    } = props

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
                userExpectation={preferredWorkPlace}
            />
            <SingleExpectation
                expectationName={
                    'Docelowe miasto, gdzie chce pracować kandydat'
                }
                userExpectation={preferredCity}
            />
            <SingleExpectation
                expectationName={'Oczekiwany typ kontraktu'}
                userExpectation={preferredContract}
            />
            <SingleExpectation
                expectationName={'Oczekiwane wynagrodzenie miesięczne netto'}
                userExpectation={`${preferredSalary} zł`}
            />
            <SingleExpectation
                expectationName={
                    'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
                }
                userExpectation={freeInternship}
            />
            <SingleExpectation
                expectationName={'Komercyjne doświadczenie w programowaniu'}
                userExpectation={`${experience} miesięcy`}
            />
        </Box>
    )
}
