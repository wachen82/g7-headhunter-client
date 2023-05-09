import React from 'react'
import theme from '../../../theme'
import { Box, Typography } from '@mui/material'

interface Props {
    sectionName: string
}

export const PortfolioBar = (props: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.secondary.light,
                height: '60px',
                width: '1176px',
                marginLeft: '4px',
            }}
        >
            <Typography
                sx={{
                    color: theme.palette.text.primary,
                    fontSize: '20px',
                    lineHeight: '60px',
                    marginLeft: '26px',
                }}
            >
                {props.sectionName}
            </Typography>
        </Box>
    )
}
