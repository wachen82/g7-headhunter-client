import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import theme from '../../../../theme';
import { BioAndEducation } from './ControllersPortfolioForm/BioAndEducation';
import { CoursesAndWorkExp } from './ControllersPortfolioForm/CoursesAndWorkExp';
import { CommercialExpAndProjectUrls } from './ControllersPortfolioForm/CommercialExpAndProjectUrls';
import { ProjectUrlsAndPortfolioUrls } from './ControllersPortfolioForm/ProjectUrlsAndPortfolioUrls';

export const helperTextStyles = {
    margin: 0,
    paddingX: '1rem',
    backgroundColor: theme.palette.background.paper,
};

export const PortfolioForm = () => {
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Portfolio
            </Typography>
            <Grid container spacing={3}>
                <BioAndEducation/>
                <CoursesAndWorkExp/>
                <CommercialExpAndProjectUrls/>
                <ProjectUrlsAndPortfolioUrls/>
            </Grid>
        </>
    );
};
