import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import theme from '../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
    url: string
}

export const BackArrowLink = (props: Props) => {
    return (
        <Link
            href={props.url}
            sx={{
                textDecoration: 'none',
                height: '27px',
                marginRight: '25px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Typography
                    sx={{
                        color: theme.palette.grey['300'],
                        fontSize: '20px',
                        lineHeight: '27px',
                        fontWeight: 'normal',
                    }}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: '16px',
                        lineHeight: '27px',
                        fontWeight: 'normal',
                        marginLeft: '10px',
                    }}
                >
                    Wróć
                </Typography>
            </Box>
        </Link>
    )
}
