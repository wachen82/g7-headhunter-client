import { Avatar, Button, Typography } from '@mui/material';
import theme from '../../../../theme';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';

interface Props {
    userName: string;
    avatarUrl: string;
    onClick: () => void;
    anchorRef: React.Ref<HTMLButtonElement>;
    open: boolean;
}
export const MenuButton = ({userName, avatarUrl, anchorRef, onClick,open}: Props) => {
    return (
        <Button
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={onClick}
        sx={{
            width: '260px',
            height: '80px',
            borderRadius: 0,
            backgroundColor: theme.palette.grey['800'],
            color: theme.palette.grey['800'],
            '&:hover': {
                backgroundColor: theme.palette.grey['800'],
            },
        }}
    >
        <Avatar
            alt={userName}
            sx={{ width: 45, height: 45 }}
            src={avatarUrl}
        />
        <Typography
            sx={{
                color: theme.palette.text.primary,
                padding: 1,
                fontSize: '18px',
                fontWeight: 'light',
                textTransform: 'capitalize',
            }}
        >
            {userName}
            <ArrowDropDownIcon
                sx={{
                    marginLeft: '12px',
                }}
            />
        </Typography>
    </Button>);
};
