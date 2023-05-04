import { Box, Container } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const AuthPage = ({ children }: Props) => {
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
                    component="img"
                    sx={{
                        width: 150,
                        paddingBottom: '2rem',
                    }}
                    alt="Logo megak"
                    src={process.env.PUBLIC_URL + '/mega-k.png'}
                />
                {children}
            </Box>
        </Container>
    )
}
