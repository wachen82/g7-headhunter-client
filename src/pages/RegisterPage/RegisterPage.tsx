import { Box, Container, Typography } from '@mui/material'
import { LoginForm } from '../../components/forms/LoginForm/LoginForm'
import theme from '../../theme'
import React from 'react'
import { RegisterForm } from '../../components/forms/RegisterForm/RegisterForm'

export const RegisterPage = () => {
    return (
        <Container
            sx={{
                height: 'inherit',
            }}
        >
            <Box
                sx={{
                    height: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                    }}
                >
                    <Typography
                        color={theme.palette.text.primary}
                        fontSize="x-large"
                    >
                        Wypełnij formularz rejestracyjny
                    </Typography>
                </Box>

                <RegisterForm />
            </Box>
        </Container>
    )
}
