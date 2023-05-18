import React from 'react'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface Props {
    color: string
}

export const GradeStar = (props: Props) => {
    return (
        <Typography
            sx={{
                fontSize: '20px',
                color: props.color,
            }}
        >
            <FontAwesomeIcon icon={faStar} />
        </Typography>
    )
}
