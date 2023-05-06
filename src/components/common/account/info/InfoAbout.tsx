import { Typography } from '@mui/material'
import theme from '../../../../theme'
import React from 'react'

interface Props {
    about: string
}

export const InfoAbout = (props: Props) => {
    const { about } = props

    return (
        <>
            <Typography
                sx={{
                    fontSize: '16px',
                    lineHeight: '27px',
                    color: theme.palette.grey['400'],
                    marginTop: '10px',
                }}
            >
                O mnie
            </Typography>
            <Typography
                sx={{
                    margin: '0 25px 10px 0',
                    color: theme.palette.text.primary,
                    fontWeight: 'lighter',
                }}
            >
                {about}
            </Typography>
        </>
    )
}
