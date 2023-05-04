import { Box, Container } from '@mui/material'
import { useTitle } from '../../hooks/useTitle'
import { NotFoundBox } from '../../components/common/NotFound/NotFoundBox'

export const NotFoundPage = () => {
    useTitle('Błąd 404')

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
                <NotFoundBox />
            </Box>
        </Container>
    )
}
