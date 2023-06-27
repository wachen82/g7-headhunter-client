import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CitySalaryContractType } from './ControllersExpectedWorkForm/CitySalaryContractType';
import { TypeWorkAndApprenticeship } from './ControllersExpectedWorkForm/TypeWorkAndApprenticeship';

export const ExpectedWorkForm = () => {
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Preferowane zatrudnienie
            </Typography>
            <Grid container spacing={3}>
                <CitySalaryContractType />
                <TypeWorkAndApprenticeship />
            </Grid>
        </>
    );
};
