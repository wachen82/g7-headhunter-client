import React from 'react'
import { Avatar, Box, Link, Typography } from '@mui/material'
import theme from '../../../../../src/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

interface Props {
    userName: string
    avatarUrl: string
    gitHubName: string
    phoneNumber: string
    mailAddress: string
    about: string
}

export const InfoBox = (props: Props) => {
    const { userName, avatarUrl, gitHubName, phoneNumber, mailAddress, about } =
        props

    return (
        <Box width="250px" height="718px" sx={{ margin: '0 auto' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.secondary.light,
                }}
            >
                <Avatar
                    alt={userName}
                    sx={{
                        width: 150,
                        height: 150,
                        margin: '30px 50px 12px 50px',
                    }}
                    src={avatarUrl}
                />
                <Typography
                    sx={{
                        fontSize: '24px',
                        lineHeight: '39px',
                        color: theme.palette.text.primary,
                        margin: '0 auto',
                        textTransform: 'capitalize',
                        fontWeight: 'light',
                    }}
                >
                    {userName}
                </Typography>

                <Typography
                    sx={{
                        fontSize: '16px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        textTransform: 'lowercase',
                        fontWeight: 'normal',
                    }}
                >
                    <Link
                        href={`https://github.com/${gitHubName}`}
                        target={'_blank'}
                        sx={{
                            textDecoration: 'none',
                            color: theme.palette.info.main,
                        }}
                    >
                        <FontAwesomeIcon icon={faGithub} /> {gitHubName}
                    </Link>
                </Typography>

                {/*telefon, mail i opis*/}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '90%',
                        margin: '10px 25px',
                    }}
                >
                    {/*telefon*/}
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
                            {phoneNumber}
                        </Typography>
                    </Box>

                    {/*mail*/}
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
                            {mailAddress}
                        </Typography>
                    </Box>

                    {/*o mnie*/}
                    <Box>
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
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
