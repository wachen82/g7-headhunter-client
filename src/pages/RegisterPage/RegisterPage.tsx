import { Box, Container } from '@mui/material';
import React from 'react';
import { RegisterForm } from '../../components/forms/RegisterForm/FormSteper';

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
    );
};
