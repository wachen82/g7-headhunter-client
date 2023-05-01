import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#e02735', //kolor buttona
        },
        secondary: {
            main: '#222224', //tło
            light: '#292A2B', //tło inputów
        },
        text: {
            primary: '#F7F7F7', //kolor linków (zapomniałeś hasła)
            secondary: '#7E7E7E', //kolor tekstu w inputach logowania
        },
        background: {
            default: '#292A2B',
            paper: '#292A2B',
        },
    },
})

export default theme
