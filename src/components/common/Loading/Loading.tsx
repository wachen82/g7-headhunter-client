import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

export const Loading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
            <CircularProgress />
            <Typography variant="body1" style={{ marginLeft: '10px' }}>Wczytywanie...</Typography>
        </div>
    );
};

