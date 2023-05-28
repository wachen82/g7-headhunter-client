import { Box, Container, Divider, Typography } from '@mui/material';
import { DropAndClickBox } from '../../components/admin/DropAndClickBox';
import theme from '../../theme';
import { HrForm } from '../../components/forms/HrForm/HrForm';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';

export const AdminPage = () => {
    useTitle('Panel Administratora');
    const user = useAppSelector((state) => state.user);
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            <Box sx={{ width: '100%' }}>
                <UsersAppBar
                    avatarUrl={'avatarUrl'}
                    userName={'Administrator'}
                    accountUrl={`/admin/${user?._id}/account`}
                />
            </Box>
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
    );
};
