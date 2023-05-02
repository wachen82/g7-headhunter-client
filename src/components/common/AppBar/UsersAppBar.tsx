import React from 'react'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { MenuBox } from '../account/menu/MenuBox'
import theme from '../../../theme'

interface Props {
    userName: string
    avatarUrl: string
}

export const UsersAppBar = (props: Props) => {
    const { userName, avatarUrl } = props
    return (
        <Box sx={{ flexGrow: 1, paddingLeft: 0 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: theme.palette.grey['800'],
                    boxShadow: '0',
                    marginBottom: '26px',
                }}
            >
                <Toolbar
                    sx={{
                        height: 'inherit',
                    }}
                >
                    <Container
                        sx={{
                            maxWidth: '80%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: 89,
                                marginTop: '13px',
                                marginBottom: '12px',
                            }}
                            alt="Logo megak"
                            src={process.env.PUBLIC_URL + '/mega-k.png'}
                        />
                        <MenuBox userName={userName} avatarUrl={avatarUrl} />
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
