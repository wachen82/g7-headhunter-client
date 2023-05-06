import React from 'react'
import { Avatar, Box } from '@mui/material'
import theme from '../../../../../src/theme'
import { InfoContact } from './InfoContact'
import { InfoName } from './InfoName'
import { InfoAbout } from './InfoAbout'
import { InfoButton } from './InfoButton'

interface Props {
    userName: string
    avatarUrl: string
    gitHubName: string
    phoneNumber: string
    mailAddress: string
    about: string
}

export const InfoBox = (props: Props) => {
    const { userName, avatarUrl, gitHubName, phoneNumber, mailAddress, about } =
        props

    return (
        <Box width="250px" height="718px" sx={{ margin: '0 auto' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.secondary.light,
                    paddingBottom: '22px',
                }}
            >
                <Avatar
                    alt={userName}
                    sx={{
                        width: 150,
                        height: 150,
                        margin: '30px 50px 12px 50px',
                    }}
                    src={avatarUrl}
                />
                <InfoName userName={userName} gitHubName={gitHubName} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '90%',
                        margin: '10px 25px',
                    }}
                >
                    <InfoContact
                        phoneNumber={phoneNumber}
                        mailAddress={mailAddress}
                    />

                    <InfoAbout about={about} />
                </Box>

                <InfoButton
                    buttonUrl={'#'}
                    buttonText={'Brak zainteresowania'}
                />
                <InfoButton buttonUrl={'#'} buttonText={'Zatrudniony'} />
            </Box>
        </Box>
    )
}
