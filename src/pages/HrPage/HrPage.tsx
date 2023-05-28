import { useTitle } from '../../hooks/useTitle';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HrResponse } from 'types';
import { Container } from '@mui/material';
import theme from '../../theme';
import { Menu } from '../../components/hr/MenuView/Menu/Menu';
import { ENDPOINTS } from '../../services/endpoints/endpoints';

export const HrPage = () => {
    useTitle('Panel HR');
    const user = useAppSelector((state) => state.user) as HrResponse;

    if (!user) {
        return null;
    }

    return (
        <>
            <UsersAppBar avatarUrl={'avatarUrl'} userName={user.fullName} accountUrl={`${ENDPOINTS.lHHr}/${user._id}`}/>
            <main
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh'
                }}
            >
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
        </>
    );
};
