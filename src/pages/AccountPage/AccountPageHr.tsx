import { ChangePassword } from '../../components/common/account/ChangePassword/ChangePassword';
import { Box, Card, CardContent, Container, Divider, Typography } from '@mui/material';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import theme from '../../theme';
import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HrResponse } from 'types';
import { ENDPOINTS } from '../../services/endpoints/endpoints';

export const AccountPageHr = () => {
    useTitle('Panel zarządzania kontem użytkownika');
    const user = useAppSelector((state) => state.user) as HrResponse;
    return (<>
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
                    userName={user?.email ? user.email : ''}
                    accountUrl={`${ENDPOINTS.lHHr}/${user._id}`}
                />
            </Box>
            <Container
                sx={{
                    maxWidth: '80%',
                    height: '100vh',
                    margin: '0 auto',
                    textAlign: 'center',
                    bgcolor: theme.palette.secondary.light,
                }}
            >
                <Typography
                    variant='h1'
                    color={theme.palette.text.primary}
                    sx={{ fontSize: '18px', padding: 3, textAlign: 'left' }}
                >
                    Twoje konto
                </Typography>
                <Divider sx={{ bgcolor: theme.palette.primary.main }} />
                <Card sx={{bgcolor: theme.palette.secondary.light }}>
                    <CardContent>
                        <Typography
                            variant="h2"
                            color={theme.palette.text.primary}
                            sx={{ fontSize: '18px', padding: 3, textAlign: 'center' }}
                        >
                            Twoje dane
                        </Typography>
                       <Typography variant="body1"  color={theme.palette.text.primary}>
                           Email: {user?.email}
                        </Typography>
                        <Typography variant="body1"  color={theme.palette.text.primary}>
                            Rola: {user?.role}
                        </Typography>
                    </CardContent>
                </Card>
                <ChangePassword />
            </Container>
        </main>
    </>);
};
