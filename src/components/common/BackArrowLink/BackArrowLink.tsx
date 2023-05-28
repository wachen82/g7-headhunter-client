import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import theme from '../../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
    url: string;
}

export const BackArrowLink = ({ url }: Props) => {
    return (
        <Link
            href={url}
            sx={{
                textDecoration: 'none',
                height: '27px',
                marginLeft: '-10%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Typography
                    sx={{
                        color: theme.palette.grey['300'],
                        fontSize: '1rem',
                        lineHeight: '27px',
                        fontWeight: 'normal',
                    }}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: '1rem',
                        lineHeight: '27px',
                        fontWeight: 'normal',
                        margin: '0 .5rem',
                    }}
                >
                    Wróć
                </Typography>
            </Box>
        </Link>
    );
};
