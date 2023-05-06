import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../theme'

interface Props {
    gradeName: string
}

export const PortfolioGrade = (props: Props) => {
    const { gradeName } = props
    return (
        <Box
            sx={{
                marginRight: '100px',
                width: '163px',
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
                <br />
                {gradeName}
            </Typography>
        </Box>
    )
}
