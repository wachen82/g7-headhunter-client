import React from 'react'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { MenuBox } from '../account/menu/MenuBox'
import theme from '../../../theme'
import { IUserProfileEntity } from 'types'

interface Props {
    firstName: IUserProfileEntity['firstName']
    lastName: IUserProfileEntity['lastName']
    avatarUrl: string
}

export const UsersAppBar = (props: Props) => {
    const { firstName, lastName, avatarUrl } = props
    return (
        <Box sx={{ margin: '0 auto 26px' }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: theme.palette.grey['800'],
                    boxShadow: '0',
                }}
            >
                <Toolbar
                    sx={{
                        height: 'inherit',
                    }}
                >
                    <Container
                        sx={{
                            width: '80%',
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
                        <MenuBox
                            firstName={firstName}
                            lastName={lastName}
                            avatarUrl={avatarUrl}
                        />
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
