import { Link, Typography } from '@mui/material'
import theme from '../../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

interface Props {
    userName: string
    gitHubName: string
}

export const InfoName = (props: Props) => {
    const { userName, gitHubName } = props

    return (
        <>
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
                    margin: '0 auto',
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
        </>
    )
}
