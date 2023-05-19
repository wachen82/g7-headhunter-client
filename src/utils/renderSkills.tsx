import { Grid, Typography } from '@mui/material';
import theme from '../theme';
import React from 'react';

const grade = ['Ocena przejścia kursu:', 'Ocena aktywności i zaangażowania w kursie:', 'Ocena kodu w projekcie własnym:', 'Ocena pracy w zespole w Scrum:'];
export const renderTypographyGridItem = (label: string, value: string) => (
    <Grid item>
        <Typography variant='h1'
                    sx={{
                        fontSize: '12px',
                        paddingTop: '5px',
                        height: '34px',
                        color: theme.palette.grey['100'],
                    }}>{label}</Typography>
        <Typography variant='body1'
                    sx={{
                        fontSize: '12px',
                        height: '24px',
                    }}>{grade.includes(label) ?
            <span>{value}<span style={{ color: theme.palette.grey['200'] }}>/5</span></span> : value} </Typography>
    </Grid>
);
