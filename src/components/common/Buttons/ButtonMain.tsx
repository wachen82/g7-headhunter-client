import { Button } from '@mui/material';

interface ButtonProps {
    variant?: 'contained' | 'outlined' | 'text';
    icon?: React.ReactNode;
    text: string;
    path?: string;
    backgroundColor?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | (() => void);
    sx?: Record<string, any>;
}

export const ButtonMain = ({
                               icon,
                               text,
                               onClick,
                               path,
                               sx,
                           }: ButtonProps & { userId?: string, userEmail?: string, userStatus?: string }) => {
    return (
        <Button
            variant="contained"
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick && onClick(event)}
            {...(path && { href: path })}
            startIcon={icon}
            sx={sx}
        >
            {text}
        </Button>
    )
}
