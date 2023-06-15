import React from 'react';
import theme from '../../../../theme';
import { Button, Link } from '@mui/material';

interface Props {
    buttonUrl: string;
    buttonText: string;
}

export const InfoButton = ({ buttonUrl, buttonText }: Props) => {
    return (
        <Button
            sx={{
                textTransform: 'none',
                height: '39px',
                textAlign: 'center',
                backgroundColor: theme.palette.primary.main,
                borderRadius: 0,
                margin: '5px 25px',
            }}
        >
            <Link
                href={buttonUrl}
                underline='none'
                sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 'lighter',
                    fontSize: '16px',
                    lineHeight: '27px',
                    width: '100%',
                }}
            >
                {buttonText}
            </Link>
        </Button>
    );
};
