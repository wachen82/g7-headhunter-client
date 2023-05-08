import { Button } from '@mui/material'

interface ButtonProps {
    variant?: 'contained' | 'outlined' | 'text'
    icon: React.ReactNode
    text: string
    path?: string
    backgroundColor?: string
    onClick?: () => void
    sx?: Record<string, any>
}

export const ButtonWithIconAndText = ({
    icon,
    text,
    onClick,
    path,
    sx,
}: ButtonProps) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            {...(path && { href: path })}
            startIcon={icon}
            sx={sx}
        >
            {text}
        </Button>
    )
}
