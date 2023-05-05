import { Container, Divider, Typography } from '@mui/material'
import { DropAndClickBox } from '../../components/admin/DropAndClickBox'
import theme from '../../theme'
import { HrForm } from '../../components/forms/HrForm/HrForm'
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar'

export const AdminPage = () => {
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <UsersAppBar avatarUrl={'avatarUrl'} userName={'imię nazwisko'} />
            <Container
                sx={{
                    maxWidth: '80%',
                    margin: '0 auto',
                    textAlign: 'center',
                    backgroundColor: theme.palette.secondary.light,
                }}
            >
                <Typography
                    variant="h1"
                    color={theme.palette.text.primary}
                    sx={{ fontSize: '18px', padding: 3, textAlign: 'left' }}
                >
                    Panel administratora
                </Typography>
                <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
                <Typography
                    variant="h2"
                    color={theme.palette.text.primary}
                    sx={{ fontSize: '18px', padding: 3, textAlign: 'center' }}
                >
                    Importuj kursantów
                </Typography>
                <DropAndClickBox />
                <Typography
                    variant="h2"
                    color={theme.palette.text.primary}
                    sx={{
                        fontSize: '18px',
                        textAlign: 'center',
                        padding: 3,
                    }}
                >
                    Dodaj headhunterów
                </Typography>
                <HrForm />
            </Container>
        </main>
    )
}
