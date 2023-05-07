import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../../theme'
import { GradeStar } from './GradeStar'

interface Props {
    gradeName: string
    grade: number
}

//@TODO handle grades into number of red/grey stars
export const SingleGrade = (props: Props) => {
    const { gradeName, grade } = props

    const stars = (grade: number) => {
        const redArray = Array.from({ length: grade }, (_, index) => index)
        const greyArray = Array.from({ length: 5 - grade }, (_, index) => index)

        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {redArray.map((i) => (
                    <GradeStar key={i} color={theme.palette.primary.main} />
                ))}
                {greyArray.map((i) => (
                    <GradeStar key={i} color={theme.palette.grey['400']} />
                ))}
            </div>
        )
    }

    return (
        <Box
            sx={{
                width: '163px',
                height: '90px',
                marginRight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    height: '41px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: theme.palette.grey['100'],
                        fontWeight: 'light',
                    }}
                >
                    {gradeName}
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: theme.palette.text.primary,
                        marginRight: '10px',
                    }}
                >
                    {grade}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: theme.palette.grey['200'],
                        marginRight: '12px',
                    }}
                >
                    /5
                </Typography>

                {stars(grade)}
            </Box>
        </Box>
    )
}
