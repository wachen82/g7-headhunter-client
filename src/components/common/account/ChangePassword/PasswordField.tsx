import theme from '../../../../theme';
import { TextField } from '@mui/material';
import React from 'react';

interface Props {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const PasswordField = ({ label, value, onChange }: Props) => <TextField
    sx={{ margin: '.5rem auto', minWidth: '500px', bgcolor: theme.palette.grey['800'] }}
    type='password'
    label={label}
    value={value}
    onChange={onChange}
/>;

