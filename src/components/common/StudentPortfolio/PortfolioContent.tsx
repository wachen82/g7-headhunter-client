import theme from '../../../theme'
import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
    content?: string
}

export const PortfolioContent = (props: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: '#222324',
                width: '1176px',
                padding: '17px 26px',
                margin: '0 0 12px 4px',
            }}
        >
            <Typography
                sx={{
                    color: theme.palette.text.primary,
                    fontSize: '16px',
                    fontWeight: 'light',
                }}
            >
                {props.content}
            </Typography>
        </Box>
    )
}
