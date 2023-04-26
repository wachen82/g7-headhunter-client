import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { Link } from '@mui/material'
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
            <Link
                component="button"
                href={url}
                underline="none"
                sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 'light',
                    height: '40px',
                }}
            >
                {text}
            </Link>
        </MenuItem>
    )
}
