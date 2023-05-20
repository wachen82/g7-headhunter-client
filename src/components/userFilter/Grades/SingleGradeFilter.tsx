import React from 'react';
import { Box, Slider, Typography } from '@mui/material';
import theme from '../../../theme';

interface Props {
    text: string;
    name: string;
    value: number;
    onChange: (name: string, value: number) => void;
}

export const SingleGradeFilter = ({ text, name, value, onChange }: Props) => {

    const handleGradeChange = (event: Event, newValue: number | number[]) => {
        onChange(name, newValue as number);
    };

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
                {text}
            </Typography>
            <Slider
                value={value}
                onChange={handleGradeChange}
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
