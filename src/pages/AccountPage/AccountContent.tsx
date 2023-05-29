import { Card, CardContent, Container, Divider, Typography } from '@mui/material';
import theme from '../../theme';
import { ChangePassword } from '../../components/common/account/ChangePassword/ChangePassword';
import { HrResponse } from 'types';
import { UserResponse } from 'types';

type Account = HrResponse | UserResponse;

interface Props {
    user: Account;
}

export const AccountContent = ({ user }: Props) => {
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
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
                <Card sx={{ bgcolor: theme.palette.secondary.light }}>
                    <CardContent>
                        <Typography
                            variant='h2'
                            color={theme.palette.text.primary}
                            sx={{ fontSize: '18px', padding: 3, textAlign: 'center' }}
                        >
                            Twoje dane
                        </Typography>
                        <Typography variant='body1' color={theme.palette.text.primary}>
                            Email: {user?.email}
                        </Typography>
                        <Typography variant='body1' color={theme.palette.text.primary}>
                            Rola: {user?.role}
                        </Typography>
                    </CardContent>
                </Card>
                <ChangePassword />
            </Container>
        </main>
    );
};
