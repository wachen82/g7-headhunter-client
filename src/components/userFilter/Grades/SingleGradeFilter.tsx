import React from 'react';
import { Box, Slider, Typography } from '@mui/material';
import theme from '../../../theme';

interface Props {
    text: string;
    //funkcja zbierająca ocenę do góry
}

export const SingleGradeFilter = (props: Props) => {
    return (
        <Box
            sx={{
                marginBottom: '20px',
            }}
        >
            <Typography
                sx={{
                    fontSize: '14px',
                    lineHeight: '23px',
                    color: theme.palette.text.primary,
                }}
            >
                {props.text}
            </Typography>
            <Slider
                aria-label="course-completion"
                defaultValue={3}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
                sx={{
                    width: '30%',
                }}
            />
        </Box>
    );
};
