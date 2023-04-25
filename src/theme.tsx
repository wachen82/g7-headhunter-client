import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#e02735',
        },
        secondary: {
            main: '#222224',
            light: '#292A2B',
            contrastText: '#7E7E7E',
        },
        text: {
            primary: '#F7F7F7',
        },
    },
})

export default theme
