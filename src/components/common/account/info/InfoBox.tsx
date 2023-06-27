import React from 'react';
import { Avatar, Box } from '@mui/material';
import theme from '../../../../../src/theme';
import { InfoContact } from './InfoContact';
import { InfoName } from './InfoName';
import { InfoBio } from './InfoBio';
import { InfoButton } from './InfoButton';
import { InfoResponse } from 'types';

export const InfoBox = ({ firstName, lastName, avatar, githubUsername, phone, email, bio, status }: InfoResponse) => {
    return (
        <Box sx={{ width: '250px', height: '718px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.secondary.light,
                    paddingBottom: '22px',
                }}
            >
                <Avatar
                    alt={`${firstName} ${lastName}`}
                    sx={{
                        width: 150,
                        height: 150,
                        margin: '30px 50px 12px 50px',
                    }}
                    src={avatar}
                />
                <InfoName
                    firstName={firstName}
                    lastName={lastName}
                    githubUsername={githubUsername}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '90%',
                        margin: '10px 25px',
                    }}
                >
                    <InfoContact phone={phone} email={email} />
                    <InfoBio bio={bio as string} />
                </Box>
                <InfoButton buttonUrl={'#'} buttonText={'Brak zainteresowania'} />
                <InfoButton buttonUrl={'#'} buttonText={status} />
            </Box>
        </Box>
    );
};
