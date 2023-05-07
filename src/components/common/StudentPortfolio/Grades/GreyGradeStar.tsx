import React from 'react'
import { Typography } from '@mui/material'
import theme from '../../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const GreyGradeStar = () => {
    return (
        <Typography
            sx={{
                fontSize: '20px',
                color: theme.palette.grey['400'],
            }}
        >
            <FontAwesomeIcon icon={faStar} />
        </Typography>
    )
}
