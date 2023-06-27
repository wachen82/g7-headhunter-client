import React from 'react';
import { Box } from '@mui/material';
import { SingleExpectation } from './SingleExpectation';
import { Expectations } from 'types';

export const ExpectationsBox = ({
                                    expectedTypeWork,
                                    targetWorkCity,
                                    expectedContractType,
                                    expectedSalary,
                                    canTakeApprenticeship,
                                    monthsOfCommercialExp,
                                }: Expectations) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#222324',
                width: '1000px',
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
    );
};
