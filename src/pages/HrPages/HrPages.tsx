import { Box, Container } from '@mui/material'
import theme from '../../theme'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'
import { Menu } from './MenuView/Menu/Menu'

export const HrPages = () => {
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ width: '100%' }}>
                <UsersAppBar
                    avatarUrl={'avatarUrl'}
                    userName={'Milena Pieńkosz'}
                />
            </Box>
            <Container
                sx={{
                    maxWidth: '80%',
                    margin: '0 auto',
                    '@media (min-width:600px)': {
                        paddingLeft: '0',
                        paddingRight: '0',
                    },
                    textAlign: 'center',
                    bgcolor: theme.palette.secondary.light,
                }}
            >
                <Menu />
            </Container>
        </main>
    )
}
