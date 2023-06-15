import React from 'react';
import theme from '../../../theme';
import { Box, Typography } from '@mui/material';

interface Props {
    sectionName: string;
}

export const PortfolioBar = ({ sectionName }: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.secondary.light,
                height: '60px',
                width: '1000px',
                marginLeft: '4px',
            }}
        >
            <Typography
                sx={{
                    color: theme.palette.text.primary,
                    fontSize: '1rem',
                    lineHeight: '60px',
                    marginLeft: '26px',
                }}
            >
                { sectionName }
            </Typography>
        </Box>
    );
};
