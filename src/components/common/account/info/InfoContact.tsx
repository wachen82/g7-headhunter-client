import React from 'react'
import theme from '../../../../theme'
import { Box, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { IUserProfileEntity } from 'types'

interface Props {
    phone: IUserProfileEntity['phone']
    email: IUserProfileEntity['email']
}

export const InfoContact = (props: Props) => {
    const { phone, email } = props

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '16px',
                        lineHeight: '27px',
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faPhone} />
                </Typography>
                <Typography
                    sx={{
                        marginLeft: '10px',
                        color: theme.palette.text.primary,
                        fontWeight: 'lighter',
                    }}
                >
                    {phone}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography
                    sx={{
                        fontSize: '16px',
                        lineHeight: '27px',
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </Typography>
                <Typography
                    sx={{
                        marginLeft: '10px',
                        color: theme.palette.text.primary,
                        fontWeight: 'lighter',
                    }}
                >
                    {email}
                </Typography>
            </Box>
        </>
    )
}
