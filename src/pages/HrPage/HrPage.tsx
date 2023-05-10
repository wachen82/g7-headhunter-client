import { useTitle } from '../../hooks/useTitle';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HrRespons } from 'types';
import { Box, Container } from '@mui/material';
import theme from '../../theme';
import { Menu } from '../../components/hr/MenuView/Menu/Menu';


export const HrPage = () => {
    useTitle('Strona HR');
    const user = useAppSelector((state) => state.user) as HrRespons;

    if (!user) {
        return null;
    }

    return (
        <>
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
                        userName={'Test Test'}
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
        </>
    );
};
