import { ChangePassword } from '../../components/common/account/ChangePassword/ChangePassword';
import { Card, CardContent, Container, Divider, Typography } from '@mui/material';
import theme from '../../theme';
import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { UserResponse } from 'types';
import { BackArrowLink } from '../../components/common/BackArrowLink/BackArrowLink';
import { useParams } from 'react-router-dom';

export const AccountPageUser = () => {
    useTitle('Panel zarządzania kontem użytkownika');
    const user = useAppSelector((state) => state.user) as UserResponse;
    const { email, role, status } = user;
    const {id} = useParams();
    return (<>
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
                <BackArrowLink url={`/user/${id}`}/>
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
                            Email: {email}
                        </Typography>
                        <Typography variant='body1' color={theme.palette.text.primary}>
                            Rola: {role}
                        </Typography>
                        <Typography variant='body1' color={theme.palette.text.primary}>
                            Status: {status ? status.status : null}
                        </Typography>
                    </CardContent>
                </Card>
                <ChangePassword />
            </Container>
        </main>
    </>);
};
