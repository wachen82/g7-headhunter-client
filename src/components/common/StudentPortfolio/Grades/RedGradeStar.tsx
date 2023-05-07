import React from 'react'
import { Typography } from '@mui/material'
import theme from '../../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const RedGradeStar = () => {
    return (
        <Typography
            sx={{
                fontSize: '20px',
                color: theme.palette.primary.main,
            }}
        >
            <FontAwesomeIcon icon={faStar} />
        </Typography>
    )
}
