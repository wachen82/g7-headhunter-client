import React from 'react'
import { Box } from '@mui/material'
import { SingleExpectation } from './SingleExpectation'
import { IUserProfileEntity } from 'types'

interface Props {
    expectedTypeWork: IUserProfileEntity['expectedTypeWork']
    targetWorkCity: IUserProfileEntity['targetWorkCity']
    expectedContractType: IUserProfileEntity['expectedContractType']
    expectedSalary: IUserProfileEntity['expectedSalary']
    canTakeApprenticeship: IUserProfileEntity['canTakeApprenticeship']
    monthsOfCommercialExp: IUserProfileEntity['monthsOfCommercialExp']
}

export const ExpectationsBox = (props: Props) => {
    const {
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
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
                userExpectation={expectedTypeWork}
            />
            <SingleExpectation
                expectationName={
                    'Docelowe miasto, gdzie chce pracować kandydat'
                }
                userExpectation={targetWorkCity as string}
            />
            <SingleExpectation
                expectationName={'Oczekiwany typ kontraktu'}
                userExpectation={expectedContractType}
            />
            <SingleExpectation
                expectationName={'Oczekiwane wynagrodzenie miesięczne netto'}
                userExpectation={`${expectedSalary} zł`}
            />
            <SingleExpectation
                expectationName={
                    'Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
                }
                userExpectation={canTakeApprenticeship}
            />
            <SingleExpectation
                expectationName={'Komercyjne doświadczenie w programowaniu'}
                userExpectation={`Liczba miesięcy: ${monthsOfCommercialExp}`}
            />
        </Box>
    )
}
