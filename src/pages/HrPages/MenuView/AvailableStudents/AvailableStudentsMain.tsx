import { Container, Divider } from '@mui/material'
import theme from '../../../../theme'

export const AvailableStudentsMain = () => {
    return (
        <Container sx={{ height: '50vh' }}>
            <Divider sx={{ bgcolor: theme.palette.grey['900'] }} />
        </Container>
    )
}