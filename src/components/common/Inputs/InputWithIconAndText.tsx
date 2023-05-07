import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import theme from '../../../theme'

interface InputProps {
    onClick?: () => void
}

export const InputWithIconAndText = ({ onClick }: InputProps) => {
    return (
        <TextField
            onClick={onClick}
            variant="outlined"
            size="small"
            placeholder="Szukaj"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search sx={{ color: theme.palette.grey['300'] }} />
                    </InputAdornment>
                ),
                sx: {
                    textTransform: 'none',
                    width: '365px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    fontWeight: 'normal',
                    color: theme.palette.grey['300'],
                    bgcolor: theme.palette.grey['800'],
                },
            }}
        />
    )
}
