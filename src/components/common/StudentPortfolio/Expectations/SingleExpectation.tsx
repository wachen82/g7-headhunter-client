import React from 'react'
import theme from '../../../../theme'
import { Box, Typography } from '@mui/material'

interface Props {
    expectationName: string
    userExpectation: string
}

export const SingleExpectation = (props: Props) => {
    const { expectationName, userExpectation } = props
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                maxWidth: '180px',
                borderRight: `1px solid ${theme.palette.secondary.light}`,
                padding: '10px 17px 17px 17px',
            }}
        >
            <Box
                sx={{
                    marginBottom: '17px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '18px',
                        fontWeight: 'light',
                        color: theme.palette.grey['100'],
                    }}
                >
                    {expectationName}
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: '16px',
                        lineHeight: '27px',
                        color: theme.palette.text.primary,
                    }}
                >
                    {userExpectation}
                </Typography>
            </Box>
        </Box>
    )
}
