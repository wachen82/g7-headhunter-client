import { AppRoutes } from './routes/Routes'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Box, CssBaseline } from '@mui/material'

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    height: '100vh',
                }}
                height="100vh"
            >
                <AppRoutes />
            </Box>
        </ThemeProvider>
    )
}
