import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import theme from '../../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

interface Props {
    url: string
}

export const PortfolioLink = (props: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                backgroundColor: '#222324',
                width: '1176px',
                padding: '17px 26px 15px 26px',
                margin: '0 0 12px 4px',
            }}
        >
            <Typography
                sx={{
                    fontSize: '24px',
                    lineHeight: '27px',
                    color: theme.palette.info.main,
                }}
            >
                <FontAwesomeIcon icon={faPaperclip} />
            </Typography>
            <Link
                href={props.url}
                target={'_blank'}
                sx={{ textDecoration: 'none' }}
            >
                <Typography
                    sx={{
                        fontSize: '16px',
                        lineHeight: '27px',
                        marginLeft: '12px',
                        color: theme.palette.info.main,
                    }}
                >
                    {props.url}
                </Typography>
            </Link>
        </Box>
    )
}
