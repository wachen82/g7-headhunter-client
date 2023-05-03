import React from 'react'
import { Box, Button, Link, styled, Typography } from '@mui/material'
import theme from '../../../theme'
import { routes } from '../../../routes/routesMap'

const StyledButton = styled(Button)({
    textTransform: 'none',
})

export const NotFoundBox = () => {
    return (
        <Box width="400px" maxWidth="90%">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // margin: '1rem',
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
                    #404
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

                <StyledButton
                    href={routes.home}
                    variant="contained"
                    color="primary"
                >
                    <Link
                        component="button"
                        underline="none"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 'light',
                            height: '40px',
                        }}
                    >
                        Wróć do strony głównej
                    </Link>
                </StyledButton>
            </Box>
        </Box>
    )
}
