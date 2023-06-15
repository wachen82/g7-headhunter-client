import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import theme from '../../../theme';
import { routes } from '../../../routes/routesMap';

export const NotFoundBox = () => {
    return (
        <Box sx={{ width: '400px', maxWidth: '90%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 'bolder',
                        fontSize: '5rem',
                    }}
                >
                    <span style={{ color: theme.palette.primary.main }}>#</span>404
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.secondary.contrastText,
                        fontWeight: 'normal',
                        marginBottom: '2rem',
                    }}
                >
                    Przykro nam. Podany adres nie istnieje.
                </Typography>

                <Button
                    href={routes.home}
                    variant='contained'
                    color='primary'
                >
                    <Link
                        component='button'
                        underline='none'
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 'light',
                            height: '40px',
                        }}
                    >
                        Wróć do strony głównej
                    </Link>
                </Button>
            </Box>
        </Box>
    );
};
