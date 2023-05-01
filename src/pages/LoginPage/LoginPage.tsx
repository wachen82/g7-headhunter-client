import { Box, Container } from '@mui/material'
import { LoginForm } from '../../components/forms/LoginForm/LoginForm'
import { useTitle } from '../../hooks/useTitle'

export const LoginPage = () => {
    useTitle('Logowanie do portalu MegaK Head Hunters')

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
                <LoginForm />
            </Box>
        </Container>
    )
}
