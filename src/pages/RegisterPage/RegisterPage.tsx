import { Box, Container, Typography } from '@mui/material'
import { LoginForm } from '../../components/forms/LoginForm/LoginForm'
import theme from '../../theme'
import React from 'react'
import { RegisterForm } from '../../components/forms/RegisterForm/FormSteper'

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
                <RegisterForm />
            </Box>
        </Container>
    )
}
