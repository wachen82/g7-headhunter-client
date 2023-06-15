import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { FirstLastName } from './ControllersUserDataForm/FirstLastName';
import { EmailPhoneAndGithubUserName } from './ControllersUserDataForm/EmailPhoneAndGithubUserName';

export const UserDataForm = () => <Box>
    <Typography variant='h6' mb={5}>
        Dane Osobowe
    </Typography>
    <Grid container spacing={3}>
        <FirstLastName />
        <EmailPhoneAndGithubUserName />
    </Grid>
</Box>;
