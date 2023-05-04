import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { Button, Link } from '@mui/material'
import theme from '../../../../theme'

interface Props {
    handleClose: (event: Event | React.SyntheticEvent) => void
    text: string
    url: string
}

export const MenuLink = (props: Props) => {
    const { handleClose, text, url } = props
    return (
        <MenuItem onClick={handleClose}>
            <Button
                sx={{
                    textTransform: 'none',
                    width: '100%',
                    textAlign: 'left',
                }}
            >
                <Link
                    href={url}
                    underline="none"
                    sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 'light',
                        height: '40px',
                        lineHeight: '40px',
                        width: '100%',
                    }}
                >
                    {text}
                </Link>
            </Button>
        </MenuItem>
    )
}
